import React from 'react';
import { Unit, Lesson, UserProfile } from '../types';
import { UNITS_DATA } from '../data/unitsData';
import { 
  CheckCircle2, 
  Lock, 
  Play, 
  Star, 
  Award, 
  Flame, 
  Zap, 
  Sparkles, 
  BookOpen, 
  Compass, 
  ChevronRight,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';

interface LearningPathProps {
  units: Unit[];
  userProfile: UserProfile;
  onStartLesson: (lesson: Lesson) => void;
  onOpenUnitOverview: (unit: Unit) => void;
  onOpenExamMode: (unitId?: number) => void;
}

export const LearningPath: React.FC<LearningPathProps> = ({
  units,
  userProfile,
  onStartLesson,
  onOpenUnitOverview,
  onOpenExamMode
}) => {
  // Find next recommended lesson
  let nextLesson: Lesson | null = null;
  let nextUnit: Unit | null = null;

  for (const unit of units) {
    for (const lesson of unit.lessons) {
      if (!userProfile.completedLessons.includes(lesson.id)) {
        nextLesson = lesson;
        nextUnit = unit;
        break;
      }
    }
    if (nextLesson) break;
  }

  // Fallback to first lesson if all finished
  if (!nextLesson && units[0]?.lessons[0]) {
    nextLesson = units[0].lessons[0];
    nextUnit = units[0];
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      
      {/* Personalized Executive Onboarding Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c224a] via-[#091b3b] to-[#06132b] border border-blue-800/50 p-6 sm:p-8 shadow-2xl shadow-blue-950/40">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-start gap-4 sm:gap-5">
            <img 
              src="/logo.png" 
              alt="English Terminale MEN Madagascar" 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-sky-400 shadow-xl shadow-sky-500/30 object-cover shrink-0 mt-1" 
            />
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>Parcours Personnalisé : {userProfile.goal === 'bac_distinction' ? 'Objectif Bac Mention Très Bien' : userProfile.goal === 'diplomacy_ngo' ? 'Organisations Internationales & Diplomatie' : 'Leadership & Anglais des Affaires'}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                English Terminale — MEN Madagascar
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Programme officiel 2026/2027 adapté au monde des affaires. Apprentissage gamifié par micro-sessions quotidiennes avec restitution audio et pièges de l'examen.
              </p>

              {/* 4 Pillars matching the logo */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                  <BookOpen className="w-3 h-3" /> Vocabulaire
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-bold">
                  <Zap className="w-3 h-3" /> Grammaire
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[11px] font-bold">
                  <Sparkles className="w-3 h-3" /> Méthode
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-300 text-[11px] font-bold">
                  <Award className="w-3 h-3" /> Exercices
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-300 text-[11px] font-bold">
                  10 Unités Thématiques
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats Widget */}
          <div className="flex sm:flex-col gap-3 shrink-0">
            <div className="bg-[#071733]/90 border border-blue-800/50 px-4 py-2.5 rounded-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-400">Série Active</p>
                <p className="text-base font-bold text-white">{userProfile.dailyStreak} jours</p>
              </div>
            </div>

            <div className="bg-[#071733]/90 border border-blue-800/50 px-4 py-2.5 rounded-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-400">Progression</p>
                <p className="text-base font-bold text-sky-300">
                  {Math.round((userProfile.completedLessons.length / 20) * 100)}% maîtrisé
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Lesson Call to Action Pill */}
        {nextLesson && nextUnit && (
          <div className="mt-6 pt-5 border-t border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black shrink-0 shadow-md shadow-blue-600/30">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-sky-400 tracking-wider">
                  Prochaine étape recommandée (Unité {nextUnit.number})
                </p>
                <p className="text-sm font-bold text-white">{nextLesson.title}</p>
              </div>
            </div>

            <button
              onClick={() => onStartLesson(nextLesson!)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-blue-600/25 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Démarrer l'entraînement</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* The 10 Units Learning Path Road */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-sky-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">Le Chemin d'Excellence (10 Unités)</h2>
          </div>
          <span className="text-xs text-sky-300/80 font-bold px-2.5 py-0.5 rounded-full bg-blue-900/40 border border-blue-700/50">
            Session 2026/2027
          </span>
        </div>

        <div className="relative space-y-6">
          {/* Vertical connecting line indicator */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-sky-600 to-blue-900 hidden sm:block pointer-events-none" />

          {units.map((unit, unitIdx) => {
            const unitLessons = unit.lessons;
            const completedInUnit = unitLessons.filter(l => userProfile.completedLessons.includes(l.id)).length;
            const unitProgressPercent = Math.round((completedInUnit / unitLessons.length) * 100);
            const isFullyCompleted = unitProgressPercent === 100;
            const isCurrent = !isFullyCompleted && (unitIdx === 0 || units[unitIdx - 1]?.lessons.some(l => userProfile.completedLessons.includes(l.id)));

            return (
              <div 
                key={unit.id}
                className={`relative rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isCurrent
                    ? 'bg-[#0a1b38]/90 border-blue-500/60 shadow-xl shadow-blue-950/40 ring-1 ring-blue-500/30'
                    : isFullyCompleted
                    ? 'bg-[#081730]/90 border-blue-800/40'
                    : 'bg-[#07142b]/60 border-blue-950 opacity-90'
                }`}
              >
                {/* Unit Header Header Bar */}
                <div className="p-5 sm:p-6 border-b border-blue-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shrink-0 shadow-md ${
                      isFullyCompleted
                        ? 'bg-blue-600 text-white shadow-blue-600/30'
                        : isCurrent
                        ? 'bg-gradient-to-tr from-blue-600 to-sky-500 text-white shadow-blue-500/30'
                        : 'bg-[#0b1b36] text-slate-400 border border-blue-900/60'
                    }`}>
                      {isFullyCompleted ? <CheckCircle2 className="w-6 h-6" /> : unit.number}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-white tracking-tight">{unit.title}</h3>
                        <span className="text-xs text-sky-200/60 italic">({unit.frenchTitle})</span>
                      </div>
                      <p className="text-xs font-semibold text-sky-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                        <span>{unit.businessTheme}</span>
                      </p>
                    </div>
                  </div>

                  {/* Actions for this Unit */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={() => onOpenUnitOverview(unit)}
                      className="px-3.5 py-1.5 rounded-xl bg-[#0d2247] hover:bg-blue-900/60 text-slate-200 text-xs font-bold border border-blue-800/60 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Fiche de Révision</span>
                    </button>

                    <button
                      onClick={() => onOpenExamMode(unit.id)}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-sky-300 text-xs font-bold border border-blue-500/40 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Épreuve Bac</span>
                    </button>
                  </div>
                </div>

                {/* Unit Body: Methodique highlight & Interactive Lessons Road */}
                <div className="p-5 sm:p-6 space-y-6">
                  {/* Special Methodological highlight from MEN */}
                  {unit.methodiqueSpeciale && (
                    <div className="p-3.5 rounded-2xl bg-[#06142a] border border-sky-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-sky-300 font-bold">
                        <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>Méthode Clé MEN : {unit.methodiqueSpeciale.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {unit.methodiqueSpeciale.steps.map((st, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-blue-950 border border-blue-800/60 text-sky-200 font-semibold">
                            {st.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Lessons list with Duolingo-style node cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {unitLessons.map((lesson) => {
                      const isDone = userProfile.completedLessons.includes(lesson.id);
                      return (
                        <div
                          key={lesson.id}
                          className={`p-4 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${
                            isDone
                              ? 'bg-[#0a1f42]/90 border-blue-500/40 hover:border-blue-400/60'
                              : 'bg-[#071630]/70 border-blue-950 hover:border-blue-900/80'
                          }`}
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full ${
                                lesson.category === 'grammar'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                  : lesson.category === 'business_case'
                                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              }`}>
                                {lesson.category === 'grammar' ? 'Grammaire Clé' : lesson.category === 'business_case' ? 'Cas Business' : 'Lexique Spécialisé'}
                              </span>

                              <span className="text-xs text-sky-300 font-bold flex items-center gap-1">
                                <Zap className="w-3 h-3 text-sky-400" /> +{lesson.xpReward} XP
                              </span>
                            </div>

                            <h4 className="font-bold text-sm text-white leading-snug">{lesson.title}</h4>
                            <p className="text-xs text-slate-300 line-clamp-2">{lesson.description}</p>
                          </div>

                          <button
                            onClick={() => onStartLesson(lesson)}
                            className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              isDone
                                ? 'bg-blue-950 hover:bg-blue-900 text-sky-300 border border-blue-700/60'
                                : 'bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white shadow-md shadow-blue-600/30 active:scale-95'
                            }`}
                          >
                            {isDone ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                                <span>Refaire l'entraînement</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>Commencer la session</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
