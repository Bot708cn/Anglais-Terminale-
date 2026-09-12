import React, { useState, useEffect } from 'react';
import { UNITS_DATA, INITIAL_USER_PROFILE } from './data/unitsData';
import { UserProfile, Lesson, Unit, Exercise } from './types';
import { Navbar } from './components/Navbar';
import { LearningPath } from './components/LearningPath';
import { UnitsOverview } from './components/UnitsOverview';
import { ExamAndBusinessMode } from './components/ExamAndBusinessMode';
import { ReviewBank } from './components/ReviewBank';
import { LessonModal } from './components/LessonModal';
import { ProfileModal } from './components/ProfileModal';

const STORAGE_KEY = 'execlingo_user_profile_v1';

export default function App() {
  // Load state from local storage or fallback to initial
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return { ...INITIAL_USER_PROFILE, ...parsed };
        }
      } catch (e) {
        console.error('Error loading saved profile', e);
      }
    }
    return INITIAL_USER_PROFILE;
  });

  // Navigation states
  const [activeTab, setActiveTab] = useState<'roadmap' | 'curriculum' | 'exam_business' | 'review' | 'profile'>('roadmap');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProfile));
    } catch (e) {
      console.error('Failed to save profile state', e);
    }
  }, [userProfile]);

  // Daily streak checker
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (userProfile.lastActiveDate !== today) {
      // Check if last active was yesterday
      const lastDate = new Date(userProfile.lastActiveDate);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        setUserProfile(prev => ({
          ...prev,
          dailyStreak: prev.dailyStreak + 1,
          lastActiveDate: today
        }));
      } else if (diffDays > 1) {
        setUserProfile(prev => ({
          ...prev,
          lastActiveDate: today
        }));
      }
    }
  }, [userProfile.lastActiveDate]);

  // Handler: lesson completed
  const handleLessonComplete = (xpEarned: number) => {
    if (!activeLesson) return;

    setUserProfile(prev => {
      const isAlreadyCompleted = prev.completedLessons.includes(activeLesson.id);
      const updatedLessons = isAlreadyCompleted
        ? prev.completedLessons
        : [...prev.completedLessons, activeLesson.id];

      // Calculate unit progress
      const targetUnit = UNITS_DATA.find(u => u.id === activeLesson.unitId);
      let updatedUnitProgress = { ...prev.unitProgress };
      let updatedCompletedUnits = [...prev.completedUnits];

      if (targetUnit) {
        const unitLessonsCount = targetUnit.lessons.length;
        const finishedInUnit = targetUnit.lessons.filter(l => updatedLessons.includes(l.id)).length;
        const pct = Math.round((finishedInUnit / unitLessonsCount) * 100);
        updatedUnitProgress[targetUnit.id] = pct;

        if (pct === 100 && !updatedCompletedUnits.includes(targetUnit.id)) {
          updatedCompletedUnits.push(targetUnit.id);
        }
      }

      const newXP = prev.xp + xpEarned;
      const newLevel = Math.floor(newXP / 100) + 1;

      return {
        ...prev,
        xp: newXP,
        executiveLevel: Math.max(prev.executiveLevel, newLevel),
        completedLessons: updatedLessons,
        unitProgress: updatedUnitProgress,
        completedUnits: updatedCompletedUnits
      };
    });

    setActiveLesson(null);
  };

  // Handler: mistake made in an exercise
  const handleMistakeMade = (exercise: Exercise, userAnswer: string) => {
    setUserProfile(prev => {
      // Reduce hearts if > 0
      const newHearts = Math.max(0, prev.hearts - 1);
      
      // Add to mistakes bank if not already present
      const alreadyInBank = prev.mistakesBank.some(m => m.exerciseId === exercise.id);
      const newMistakes = alreadyInBank
        ? prev.mistakesBank
        : [
            ...prev.mistakesBank,
            {
              id: `mistake-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
              exerciseId: exercise.id,
              unitId: activeLesson?.unitId || 1,
              question: exercise.question,
              correctAnswer: Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer[0] : exercise.correctAnswer,
              explanation: exercise.explanation,
              timestamp: Date.now()
            }
          ];

      return {
        ...prev,
        hearts: newHearts,
        mistakesBank: newMistakes
      };
    });
  };

  // Handler: clear mistake from review bank
  const handleClearMistake = (id: string) => {
    setUserProfile(prev => ({
      ...prev,
      mistakesBank: prev.mistakesBank.filter(m => m.id !== id)
    }));
  };

  // Handler: reward custom XP (from exam drills or practice)
  const handleRewardXP = (amount: number) => {
    setUserProfile(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 100) + 1;
      return {
        ...prev,
        xp: newXP,
        executiveLevel: Math.max(prev.executiveLevel, newLevel)
      };
    });
  };

  // Handler: sound toggle
  const handleToggleSound = () => {
    setUserProfile(prev => ({
      ...prev,
      soundEnabled: !prev.soundEnabled
    }));
  };

  // Handler: refill hearts
  const handleRefillHearts = () => {
    setUserProfile(prev => ({
      ...prev,
      hearts: 5
    }));
  };

  // Handler: update partial profile
  const handleUpdateProfile = (updated: Partial<UserProfile>) => {
    setUserProfile(prev => ({
      ...prev,
      ...updated
    }));
  };

  return (
    <div className="min-h-screen bg-[#071329] text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-sky-200">
      
      {/* Top Global Navigation Bar */}
      <Navbar
        userProfile={userProfile}
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (tab === 'profile') {
            setShowProfileModal(true);
          } else {
            setActiveTab(tab);
          }
        }}
        onToggleSound={handleToggleSound}
        onOpenProfile={() => setShowProfileModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'roadmap' && (
          <LearningPath
            units={UNITS_DATA}
            userProfile={userProfile}
            onStartLesson={(lesson) => setActiveLesson(lesson)}
            onOpenUnitOverview={(unit) => {
              setSelectedUnitId(unit.id);
              setActiveTab('curriculum');
            }}
            onOpenExamMode={(unitId) => {
              if (unitId) setSelectedUnitId(unitId);
              setActiveTab('exam_business');
            }}
          />
        )}

        {activeTab === 'curriculum' && (
          <UnitsOverview
            units={UNITS_DATA}
            selectedUnitId={selectedUnitId}
            onSelectUnit={(unitId) => setSelectedUnitId(unitId)}
          />
        )}

        {activeTab === 'exam_business' && (
          <ExamAndBusinessMode
            units={UNITS_DATA}
            initialUnitId={selectedUnitId}
            onRewardXP={handleRewardXP}
          />
        )}

        {activeTab === 'review' && (
          <ReviewBank
            userProfile={userProfile}
            onClearMistake={handleClearMistake}
            onRewardXP={handleRewardXP}
          />
        )}
      </main>

      {/* Interactive Duolingo-style Lesson Workout Modal */}
      {activeLesson && (
        <LessonModal
          lesson={activeLesson}
          userProfile={userProfile}
          onClose={() => setActiveLesson(null)}
          onComplete={handleLessonComplete}
          onMistakeMade={handleMistakeMade}
        />
      )}

      {/* Profile & Personalized Progression Modal */}
      {showProfileModal && (
        <ProfileModal
          userProfile={userProfile}
          onClose={() => setShowProfileModal(false)}
          onUpdateProfile={handleUpdateProfile}
          onRefillHearts={handleRefillHearts}
        />
      )}

      {/* Subtle Footer */}
      <footer className="border-t border-blue-950/80 bg-[#050e1f] py-6 text-center text-xs text-sky-200/60">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026/2027 ExecLingo — Conforme au programme officiel MEN Madagascar Terminale.</p>
          <p className="text-sky-300/80">Adapté aux standards internationaux de l'anglais des affaires.</p>
        </div>
      </footer>

    </div>
  );
}
