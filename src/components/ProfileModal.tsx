import React, { useState } from 'react';
import { UserProfile, PersonalGoal } from '../types';
import { 
  X, 
  UserCheck, 
  Target, 
  Clock, 
  Heart, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  RotateCcw,
  Zap,
  Flame,
  BrainCircuit
} from 'lucide-react';
import { playSuccessSound } from '../utils/audio';

interface ProfileModalProps {
  userProfile: UserProfile;
  onClose: () => void;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onRefillHearts: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  userProfile,
  onClose,
  onUpdateProfile,
  onRefillHearts
}) => {
  const [name, setName] = useState<string>(userProfile.name);
  const [selectedGoal, setSelectedGoal] = useState<PersonalGoal>(userProfile.goal);
  const [dailyMinutes, setDailyMinutes] = useState<number>(userProfile.dailyGoalMinutes);
  const [selectedAvatar, setSelectedAvatar] = useState<string>(userProfile.avatar);

  // Diagnostic Test state
  const [showDiagnostic, setShowDiagnostic] = useState<boolean>(false);
  const [diagnosticScore, setDiagnosticScore] = useState<number | null>(null);

  const avatars = ['👨‍💼', '👩‍💼', '🧑‍🎓', '👩‍🎓', '👨‍💻', '👩‍💻', '🌍', '💼'];

  const goals: { id: PersonalGoal; title: string; desc: string; badge: string }[] = [
    {
      id: 'bac_distinction',
      title: 'Bac Terminale Mention Très Bien',
      desc: 'Optimisé pour les 10 unités officielles du MEN Madagascar 2026/2027, corrigés types et grammaire d\'examen.',
      badge: 'Examen d\'État'
    },
    {
      id: 'business_executive',
      title: 'Anglais des Affaires & Management',
      desc: 'Négociation, entretiens d\'embauche, structures causatives et communication d\'entreprise.',
      badge: 'Monde des Affaires'
    },
    {
      id: 'diplomacy_ngo',
      title: 'Organisations Internationales & ONG',
      desc: 'Rapports à la voix passive, mandats ONU/UNICEF/USAID, plaidoyers et résolutions.',
      badge: 'Diplomatie & CSR'
    },
    {
      id: 'career_booster',
      title: 'Carrière Accélérée & Polyvalent',
      desc: 'Parcours intensif équilibré combinant rigueur académique et fluidité professionnelle.',
      badge: 'Intensif'
    }
  ];

  const diagnosticQuestions = [
    {
      q: '1. Which is correct for strict obligation? "The director made him (work / to work) late."',
      ans: 'work'
    },
    {
      q: '2. Express regret for the past: "I wish I (studied / had studied) harder last year."',
      ans: 'had studied'
    },
    {
      q: '3. Reported speech backshift: « I saw the news yesterday » -> He said he (had seen / saw) the news.',
      ans: 'had seen'
    },
    {
      q: '4. Emphatic inversion: "Only if we act now, (will we / we will) succeed."',
      ans: 'will we'
    }
  ];

  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<number, string>>({});

  const handleSave = () => {
    onUpdateProfile({
      name,
      goal: selectedGoal,
      dailyGoalMinutes: dailyMinutes,
      avatar: selectedAvatar
    });
    playSuccessSound();
    onClose();
  };

  const handleEvaluateDiagnostic = () => {
    let score = 0;
    diagnosticQuestions.forEach((q, idx) => {
      if (diagnosticAnswers[idx]?.toLowerCase().trim() === q.ans.toLowerCase().trim()) {
        score++;
      }
    });
    setDiagnosticScore(score);
    playSuccessSound();
    onUpdateProfile({
      executiveLevel: score >= 3 ? 3 : 2,
      executiveRank: score >= 3 ? 'Executive Master / Mention Très Bien' : 'Senior Analyst / Mention Bien'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050e1f]/90 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-xl bg-[#081836] border border-blue-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-950/60 space-y-6 my-8 animate-in fade-in zoom-in duration-300">
        
        {/* Top title */}
        <div className="flex items-center justify-between border-b border-blue-900/50 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Profil & Module Personnalisé</h2>
              <p className="text-xs text-sky-200/70">Adaptez vos objectifs et votre rythme de progression</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-blue-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Identity & Avatar */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-sky-200 uppercase tracking-wider">
            Nom d'apprenant / Titre
          </label>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-900/40 border border-blue-500/40 flex items-center justify-center text-2xl shrink-0">
              {selectedAvatar}
            </div>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-[#051126] border border-blue-900/60 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-sky-400"
              placeholder="Votre nom..."
            />
          </div>

          {/* Avatar picker */}
          <div className="flex items-center gap-2 pt-1">
            {avatars.map(av => (
              <button
                key={av}
                onClick={() => setSelectedAvatar(av)}
                className={`p-1.5 rounded-xl text-lg transition-all cursor-pointer ${
                  selectedAvatar === av ? 'bg-blue-600/40 border border-sky-400' : 'hover:bg-blue-950'
                }`}
              >
                {av}
              </button>
            ))}
          </div>
        </div>

        {/* Focus Goal Selection (Personalized Module) */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-sky-200 uppercase tracking-wider">
            Votre Objectif Prioritaire (Module Personnalisé)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {goals.map(g => {
              const isSelected = selectedGoal === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-900/40 border-sky-400 text-sky-200 shadow-md shadow-sky-500/10 ring-1 ring-sky-400'
                      : 'bg-[#051126] border-blue-900/60 hover:border-blue-700 text-slate-300'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-sky-400 block mb-1">
                    {g.badge}
                  </span>
                  <p className="font-bold text-xs sm:text-sm text-white mb-1">{g.title}</p>
                  <p className="text-[11px] text-sky-200/60 line-clamp-2 leading-relaxed">{g.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Daily Pace Target */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-sky-200 uppercase tracking-wider flex items-center justify-between">
            <span>Rythme Quotidien Recommandé</span>
            <span className="text-sky-400 font-semibold">{dailyMinutes} minutes / jour</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[5, 15, 30].map(mins => (
              <button
                key={mins}
                onClick={() => setDailyMinutes(mins)}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  dailyMinutes === mins
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-[#051126] border border-blue-900/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                {mins} min / jour {mins === 15 && '(Recommandé)'}
              </button>
            ))}
          </div>
        </div>

        {/* Hearts Refill & Quick Diagnostic */}
        <div className="p-4 rounded-2xl bg-[#051126] border border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <div>
              <p className="text-xs font-bold text-white">Énergie Focus : {userProfile.hearts}/5</p>
              <p className="text-[11px] text-sky-200/60">Rechargez vos cœurs pour vous entraîner sans interruption.</p>
            </div>
          </div>
          <button
            onClick={() => {
              onRefillHearts();
              playSuccessSound();
            }}
            className="px-4 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 text-xs font-bold transition-all cursor-pointer whitespace-nowrap"
          >
            Recharger (Plein)
          </button>
        </div>

        {/* Placement Diagnostic Test */}
        <div className="border-t border-blue-900/50 pt-4">
          {!showDiagnostic ? (
            <button
              onClick={() => setShowDiagnostic(true)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0a1f42] hover:bg-blue-900 border border-blue-800/60 text-sky-200 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <BrainCircuit className="w-4 h-4 text-sky-400" />
              <span>Passer le Test Diagnostique de Niveau (4 questions)</span>
            </button>
          ) : (
            <div className="p-4 rounded-2xl bg-[#051126] border border-blue-900/60 space-y-3 animate-in fade-in duration-200">
              <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                Test Diagnostique Rapide
              </h4>
              <div className="space-y-2">
                {diagnosticQuestions.map((q, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <p className="text-slate-300 font-medium">{q.q}</p>
                    <input
                      type="text"
                      value={diagnosticAnswers[idx] || ''}
                      onChange={e => setDiagnosticAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                      placeholder="Votre réponse (ex: work)..."
                      className="w-full px-3 py-1.5 bg-[#07152f] border border-blue-900/60 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleEvaluateDiagnostic}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-xs rounded-xl cursor-pointer shadow-md shadow-blue-600/30"
                >
                  Calculer mon niveau
                </button>

                {diagnosticScore !== null && (
                  <span className="text-xs font-bold text-emerald-400">
                    Résultat : {diagnosticScore}/4 — Niveau calibré !
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Save & Apply */}
        <button
          onClick={handleSave}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 active:scale-95 transition-all cursor-pointer"
        >
          Enregistrer les Préférences
        </button>

      </div>
    </div>
  );
};
