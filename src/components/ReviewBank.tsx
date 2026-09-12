import React, { useState } from 'react';
import { UserProfile, Exercise } from '../types';
import { 
  ShieldAlert, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Volume2, 
  Sparkles, 
  Trash2,
  BrainCircuit,
  Zap
} from 'lucide-react';
import { speakEnglish, playSuccessSound } from '../utils/audio';

interface ReviewBankProps {
  userProfile: UserProfile;
  onClearMistake: (id: string) => void;
  onRewardXP: (xp: number) => void;
}

export const ReviewBank: React.FC<ReviewBankProps> = ({
  userProfile,
  onClearMistake,
  onRewardXP
}) => {
  // Preloaded curriculum pitfalls if user has no mistakes yet
  const defaultPitfalls = [
    {
      id: 'default-1',
      unitId: 4,
      title: 'Piège Causatif MAKE vs GET',
      question: 'The CEO made the manager (to present / present) the results.',
      correctAnswer: 'present (MAKE + base verbale SANS TO)',
      explanation: 'MAKE impose une obligation stricte et ne prend jamais "to". Seul GET prend "to" à la voix active.',
      category: 'Unité 04 — Work & Employment'
    },
    {
      id: 'default-2',
      unitId: 5,
      title: 'Piège du Regret Passé (Backshift)',
      question: 'Marie failed her exam because she didn\'t study -> Marie wishes she (studied / had studied).',
      correctAnswer: 'had studied (WISH + Past Perfect)',
      explanation: 'Pour un regret portant sur le passé, la concordance des temps impose le Past Perfect (had + participe passé).',
      category: 'Unité 05 — Wishes & Regrets'
    },
    {
      id: 'default-3',
      unitId: 10,
      title: 'Piège de l\'Inversion Emphatique',
      question: 'Only if we fight corruption, (we will / will we) develop our nation.',
      correctAnswer: 'will we develop (Inversion Sujet-Auxiliaire obligatoire)',
      explanation: 'Quand "Only if..." est placé en tête de phrase pour le style oratoire, la proposition suivante inverse le sujet et l\'auxiliaire.',
      category: 'Unité 10 — Leadership & Governance'
    },
    {
      id: 'default-4',
      unitId: 3,
      title: 'Piège des Adjectifs en -ED vs -ING',
      question: 'I feel completely (tired / tiring) after 10 kilometers of running.',
      correctAnswer: 'tired (-ED pour le ressenti interne)',
      explanation: '-ED décrit ce que ressent une personne, tandis que -ING décrit la cause du sentiment (Running is tiring).',
      category: 'Unité 03 — Sports & Leisure'
    }
  ];

  const [activePracticeId, setActivePracticeId] = useState<string | null>(null);
  const [userAttempt, setUserAttempt] = useState<string>('');
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const handleVerifyPractice = (expected: string, mistakeId: string) => {
    if (userAttempt.trim().toLowerCase().includes(expected.split(' ')[0].toLowerCase())) {
      setFeedback({ isCorrect: true, message: 'Parfait ! Notions assimilée et enregistrée.' });
      playSuccessSound();
      onRewardXP(20);
      setTimeout(() => {
        onClearMistake(mistakeId);
        setActivePracticeId(null);
        setUserAttempt('');
        setFeedback(null);
      }, 1500);
    } else {
      setFeedback({ isCorrect: false, message: `Attention, la réponse attendue est : ${expected}` });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold mb-2">
          <ShieldAlert className="w-3.5 h-3.5 text-sky-400" />
          <span>Répétition Espacée & Déverminage</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Banque de Révision & Pièges Récurrents
        </h1>
        <p className="text-sm text-sky-200/70">
          Chaque erreur commise lors des sessions Duolingo est conservée ici pour garantir 100% de maîtrise avant l'examen et les entretiens.
        </p>
      </div>

      {/* User's personalized mistakes list */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center justify-between">
          <span>Vos points à consolider ({userProfile.mistakesBank.length})</span>
          {userProfile.mistakesBank.length > 0 && (
            <span className="text-xs text-amber-400 font-medium">+20 XP par point corrigé</span>
          )}
        </h2>

        {userProfile.mistakesBank.length === 0 ? (
          <div className="p-8 rounded-3xl bg-[#081836]/90 border border-blue-900/60 text-center space-y-3 shadow-xl shadow-blue-950/30">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-sky-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Aucune erreur en suspens !</h3>
            <p className="text-xs text-sky-200/60 max-w-md mx-auto">
              Vous avez validé l'ensemble de vos questions. Continuez le parcours ou révisez les pièges fréquents du Bac ci-dessous.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {userProfile.mistakesBank.map(mistake => (
              <div 
                key={mistake.id}
                className="p-5 rounded-2xl bg-[#081836] border border-blue-900/60 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    Unité {mistake.unitId}
                  </span>
                  <button
                    onClick={() => onClearMistake(mistake.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-blue-950 transition-colors"
                    title="Supprimer de la liste"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-sm font-bold text-white">{mistake.question}</p>

                <div className="p-3 bg-[#051126] rounded-xl border border-blue-900/40 text-xs space-y-1">
                  <p className="text-sky-300 font-semibold">
                    Réponse exacte : {mistake.correctAnswer}
                  </p>
                  <p className="text-slate-300">
                    {mistake.explanation}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => speakEnglish(mistake.correctAnswer)}
                    className="text-xs text-sky-300/80 hover:text-sky-200 flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" /> Écouter
                  </button>

                  <button
                    onClick={() => {
                      setActivePracticeId(mistake.id);
                      setUserAttempt('');
                      setFeedback(null);
                    }}
                    className="px-4 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-sky-300 border border-blue-500/40 text-xs font-bold transition-all cursor-pointer"
                  >
                    S'entraîner à nouveau (+20 XP)
                  </button>
                </div>

                {/* Inline practice drill */}
                {activePracticeId === mistake.id && (
                  <div className="pt-3 border-t border-blue-900/50 space-y-2 animate-in fade-in duration-200">
                    <p className="text-xs text-sky-200/80 font-medium">Tapez la bonne réponse pour valider :</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={userAttempt}
                        onChange={e => setUserAttempt(e.target.value)}
                        placeholder="Votre réponse..."
                        className="flex-1 px-3 py-2 bg-[#051126] border border-blue-900/60 rounded-xl text-xs text-white focus:outline-none focus:border-sky-400"
                      />
                      <button
                        onClick={() => handleVerifyPractice(mistake.correctAnswer, mistake.id)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-xs rounded-xl cursor-pointer shadow-md shadow-blue-600/30"
                      >
                        Valider
                      </button>
                    </div>

                    {feedback && (
                      <p className={`text-xs font-semibold ${feedback.isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {feedback.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Top 4 Official Bac Traps Masterlist */}
      <div className="space-y-4 pt-6 border-t border-blue-900/60">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-sky-400" />
          <h2 className="text-lg font-bold text-white">
            Grand Récapitulatif des 4 Pièges Majeurs du Référentiel MEN
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {defaultPitfalls.map(item => (
            <div key={item.id} className="p-5 rounded-2xl bg-[#081836] border border-blue-900/60 space-y-3 shadow-md">
              <span className="text-[10px] uppercase font-bold text-sky-300 px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/30">
                {item.category}
              </span>
              <h3 className="font-bold text-base text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 italic">« {item.question} »</p>
              <div className="p-3 bg-[#051126] rounded-xl border border-blue-900/40 text-xs">
                <p className="font-bold text-sky-400 mb-1">Règle officielle : {item.correctAnswer}</p>
                <p className="text-slate-300">{item.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
