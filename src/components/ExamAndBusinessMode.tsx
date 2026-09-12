import React, { useState } from 'react';
import { Unit } from '../types';
import { 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  ChevronRight, 
  RotateCcw,
  BookOpen,
  Send,
  HelpCircle,
  Clock
} from 'lucide-react';
import { speakEnglish, playSuccessSound } from '../utils/audio';

interface ExamAndBusinessModeProps {
  units: Unit[];
  initialUnitId?: number;
  onRewardXP: (xp: number) => void;
}

export const ExamAndBusinessMode: React.FC<ExamAndBusinessModeProps> = ({
  units,
  initialUnitId = 1,
  onRewardXP
}) => {
  const [activeTab, setActiveTab] = useState<'bac_official' | 'business_sim'>('bac_official');
  const [selectedUnitId, setSelectedUnitId] = useState<number>(initialUnitId);

  // Bac practice state
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});

  // Business scenario state
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [scenarioAnswers, setScenarioAnswers] = useState<Record<number, string>>({});
  const [scenarioEvaluated, setScenarioEvaluated] = useState<boolean>(false);

  const currentUnit = units.find(u => u.id === selectedUnitId) || units[0];

  const handleAnswerChange = (key: string, val: string) => {
    setUserAnswers(prev => ({ ...prev, [key]: val }));
  };

  const handleCheckBacExercise = (key: string) => {
    setSubmittedAnswers(prev => ({ ...prev, [key]: true }));
    onRewardXP(15);
    playSuccessSound();
  };

  // 4 Rich Business Scenarios adapted to the 10 units
  const businessScenarios = [
    {
      id: 1,
      unitRef: 'Unité 04 (Work & Employment)',
      title: 'Executive Job Interview & Negotiation',
      role: 'Candidate for Head of Regional Operations (Madagascar & Indian Ocean)',
      brief: 'Vous passez un entretien en anglais. L\'examinateur vous demande comment vous gérez la délégation causale et la protection des équipes selon les normes OIT.',
      interviewerQuestion: '« How do you ensure high performance without infringing upon workers\' rights or causing burnout? »',
      options: [
        {
          text: 'I always have our department heads establish clear 9-to-5 shifts, ensure employees are protected from exploitation, and we get the teams to collaborate through positive incentives.',
          isOptimal: true,
          feedback: 'Excellente réponse exécutive ! Combine parfaitement le causatif "have someone establish", le passif de protection "protected from", et la persuasion "get to collaborate".'
        },
        {
          text: 'I made them working overtime every day because deadline is priority.',
          isOptimal: false,
          feedback: 'Erreur grammaticale grave : MAKE prend la base verbale ("made them work", pas "working") et cela viole les droits de l\'OIT.'
        },
        {
          text: 'I don\'t know, I just wish they work harder.',
          isOptimal: false,
          feedback: 'Faute de grammaire sur WISH (au présent, il faut le Past Simple : "I wish they worked harder") et manque de posture managériale.'
        }
      ]
    },
    {
      id: 2,
      unitRef: 'Unité 01 (Family Life & Interpersonal Dynamics)',
      title: 'Team Conflict Resolution via the 3H Method',
      role: 'Managing Partner / Médiateur',
      brief: 'Deux chefs de projet sont en désaccord majeur sur l\'attribution d\'un contrat public à Antananarivo. Appliquez la méthode officielle 3H (Head, Heart, Hands).',
      interviewerQuestion: '« Tensions are peaking between senior architects. What is your concrete 3H mediation statement? »',
      options: [
        {
          text: 'Head: We must analyze the objective contractual milestones. Heart: I understand everyone\'s intense commitment and emotional stress. Hands: Let us set up a daily 15-minute alignment check to distribute tasks equitably.',
          isOptimal: true,
          feedback: 'Parfaite articulation de la méthode 3H du Ministère : Raison (Head), Empathie (Heart), et Action concrète (Hands).'
        },
        {
          text: 'I tell both of them that they won\'t complain anymore and fire whoever is disobedient.',
          isOptimal: false,
          feedback: 'Approche autoritaire contre-productive et inefficace en gestion des conflits.'
        }
      ]
    },
    {
      id: 3,
      unitRef: 'Unité 06 (Tourism & Hospitality)',
      title: 'Sustainable Eco-Tourism Pitch',
      role: 'Tourism Development Director',
      brief: 'Vous présentez votre projet d\'écotourisme communautaire chez l\'habitant (Homestay) devant des investisseurs internationaux.',
      interviewerQuestion: '« Why should international funds invest in rural Malagasy homestays rather than mass resort chains? »',
      options: [
        {
          text: 'Thanks to community homestays, revenue flows directly to local craftspeople and families. Consequently, wildlife and lemurs are protected from poaching, and cultural authenticity is preserved.',
          isOptimal: true,
          feedback: 'Brillant ! Utilisation magistrale de "Thanks to" (cause positive), "Consequently" (conséquence logique), et valorisation de la biodiversité malgache.'
        },
        {
          text: 'Because of homestay is cheaper so tourists like it very much.',
          isOptimal: false,
          feedback: 'Because of doit être suivi d\'un groupe nominal et non d\'une proposition verbale (ex: "Because of its affordable cost...").'
        }
      ]
    },
    {
      id: 4,
      unitRef: 'Unité 10 (Leadership & Youth Empowerment)',
      title: 'Executive Boardroom Address (Inversion Emphatique)',
      role: 'CEO / Youth Delegate',
      brief: 'Vous prononcez un discours de clôture pour convaincre le conseil d\'administrateurs d\'adopter une charte éthique anti-corruption.',
      interviewerQuestion: '« Deliver the closing sentence that mobilizes the assembly with formal rhetoric. »',
      options: [
        {
          text: '« Only if we enforce strict fiscal transparency, will we build enduring prosperity for the next generation! »',
          isOptimal: true,
          feedback: 'Formule rhétorique suprême du programme : Inversion emphatique "Only if we [V], will we [V]". Impact oratoire maximal !'
        },
        {
          text: '« If we would fight corruption, we will be happy. »',
          isOptimal: false,
          feedback: 'Faute courante au Bac : Ne jamais mettre "would" dans la proposition introduite par "if".'
        }
      ]
    }
  ];

  const currentScenario = businessScenarios[activeScenarioIdx];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>Entraînement Haute Performance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Mode Épreuve Bac & Simulations Affaires
          </h1>
          <p className="text-sm text-sky-200/70">
            Passez des exercices officiels du Baccalauréat MEN Madagascar aux négociations de haut niveau.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center bg-[#0a1a36] p-1 rounded-2xl border border-blue-900/60 shrink-0">
          <button
            onClick={() => setActiveTab('bac_official')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'bac_official'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-sky-300" />
            <span>Sujets Types Bac 2026/2027</span>
          </button>

          <button
            onClick={() => setActiveTab('business_sim')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'business_sim'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span>Simulateur d'Affaires</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Bac Official Exam Questions from the MEN Document */}
      {activeTab === 'bac_official' && (
        <div className="space-y-6">
          {/* Unit selector pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {units.map(unit => (
              <button
                key={unit.id}
                onClick={() => setSelectedUnitId(unit.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedUnitId === unit.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-[#0a1b38] hover:bg-blue-950 text-slate-300 border border-blue-900/60'
                }`}
              >
                Unité {unit.number} : {unit.title}
              </button>
            ))}
          </div>

          {/* Practice Card for Selected Unit */}
          <div className="bg-[#081836]/95 border border-blue-900/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-blue-950/40">
            <div className="flex items-center justify-between border-b border-blue-900/50 pb-4">
              <div>
                <span className="text-xs uppercase font-bold text-sky-400 tracking-wider">
                  Session Examen Baccalauréat
                </span>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Unité {currentUnit.number} — {currentUnit.title}
                </h2>
              </div>
              <span className="text-xs text-sky-300/80 font-bold px-2.5 py-1 bg-blue-950 border border-blue-800 rounded-lg">Barème : 20/20</span>
            </div>

            <div className="space-y-6">
              {currentUnit.examPractice.map((item, idx) => {
                const key = `${currentUnit.id}-${idx}`;
                const isSubmitted = !!submittedAnswers[key];
                const userVal = userAnswers[key] || '';

                return (
                  <div key={idx} className="p-5 rounded-2xl bg-[#051126] border border-blue-900/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#0a1f42] text-sky-300 text-xs font-semibold border border-blue-800/60">
                        {item.type}
                      </span>
                      <span className="text-xs text-sky-300/70 font-mono">+15 XP par exercice résolu</span>
                    </div>

                    <p className="text-xs font-bold text-slate-300">{item.instruction}</p>
                    <div className="p-3.5 bg-[#07152f] rounded-xl text-sm font-mono text-slate-200 whitespace-pre-line border border-blue-900/40">
                      {item.prompt}
                    </div>

                    {/* Interactive Input or Reveal */}
                    <div className="space-y-2 pt-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={userVal}
                          onChange={e => handleAnswerChange(key, e.target.value)}
                          placeholder="Saisissez votre réponse ou transformation..."
                          className="flex-1 px-4 py-2.5 bg-[#07152f] border border-blue-900/60 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-sky-400"
                        />
                        <button
                          onClick={() => handleCheckBacExercise(key)}
                          className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-xs uppercase tracking-wide rounded-xl shadow-md shadow-blue-600/25 transition-all cursor-pointer"
                        >
                          Valider
                        </button>
                      </div>

                      {isSubmitted && (
                        <div className="mt-3 p-4 rounded-xl bg-rose-950/20 border border-rose-500/40 space-y-2 animate-in fade-in duration-200">
                          <div className="flex items-center gap-2 text-rose-300 font-bold text-xs">
                            <CheckCircle2 className="w-4 h-4 text-rose-400" />
                            <span>Corrigé officiel de l'Éducation Nationale :</span>
                          </div>
                          <p className="font-mono text-sm text-rose-200 font-bold whitespace-pre-line">
                            {item.correctAnswer}
                          </p>
                          <p className="text-xs text-slate-300 pt-1 border-t border-rose-500/20">
                            💡 <span className="font-semibold text-rose-400">Explication pédagogique : </span>
                            {item.detailedExplanation}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>
      )}

      {/* VIEW 2: Executive Business Scenario Simulator */}
      {activeTab === 'business_sim' && (
        <div className="space-y-6">
          {/* Scenario Selector Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {businessScenarios.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveScenarioIdx(idx);
                  setScenarioEvaluated(false);
                }}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeScenarioIdx === idx
                    ? 'bg-[#0b2149] border-blue-500 shadow-lg shadow-blue-900/30 ring-1 ring-sky-400'
                    : 'bg-[#081836]/70 border-blue-900/50 hover:border-blue-700'
                }`}
              >
                <span className="text-[10px] uppercase font-bold text-sky-400 block mb-1">
                  Cas #{idx + 1}
                </span>
                <p className="font-bold text-sm text-slate-100 leading-snug">{sc.title}</p>
                <p className="text-[11px] text-sky-200/60 mt-1">{sc.unitRef}</p>
              </button>
            ))}
          </div>

          {/* Active Business Simulation Card */}
          <div className="bg-[#081836]/95 border border-blue-900/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-blue-950/40">
            
            {/* Context & Brief */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-blue-900/50 pb-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold">
                  {currentScenario.unitRef}
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight mt-2">
                  {currentScenario.title}
                </h2>
                <p className="text-xs text-slate-300 mt-1">Votre rôle : <span className="text-sky-300 font-semibold">{currentScenario.role}</span></p>
              </div>

              <div className="p-3 bg-[#051126] rounded-xl border border-blue-800/60 text-xs text-slate-300 max-w-md">
                <span className="font-bold text-sky-400 block mb-0.5">Mise en situation :</span>
                {currentScenario.brief}
              </div>
            </div>

            {/* Interviewer Question Box */}
            <div className="p-5 rounded-2xl bg-[#051126] border border-blue-900/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Question de l'interlocuteur / Conseil :
                </span>
                <button
                  onClick={() => speakEnglish(currentScenario.interviewerQuestion)}
                  className="p-2 rounded-xl bg-[#0a1f42] hover:bg-blue-900 text-sky-400 transition-colors cursor-pointer"
                  title="Écouter la question"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-100 italic">
                {currentScenario.interviewerQuestion}
              </p>
            </div>

            {/* Options to choose */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Choisissez votre réponse et stratégie de communication :
              </p>

              {currentScenario.options.map((opt, optIdx) => {
                const isSelected = scenarioAnswers[activeScenarioIdx] === opt.text;
                return (
                  <button
                    key={optIdx}
                    onClick={() => {
                      setScenarioAnswers(prev => ({ ...prev, [activeScenarioIdx]: opt.text }));
                      setScenarioEvaluated(true);
                      if (opt.isOptimal) {
                        onRewardXP(25);
                        playSuccessSound();
                      }
                    }}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? opt.isOptimal
                          ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                          : 'bg-rose-950/40 border-rose-500 text-rose-200'
                        : 'bg-[#06142a] hover:bg-[#0a1e42] border-blue-900/50 text-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#0a1f42] border border-blue-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 text-sky-300">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <p className="text-sm font-medium leading-relaxed">{opt.text}</p>
                    </div>

                    {scenarioEvaluated && isSelected && (
                      <div className="mt-3 pt-3 border-t border-blue-900/40 text-xs">
                        <span className={`font-bold ${opt.isOptimal ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {opt.isOptimal ? '✓ Formulation Optimale (+25 XP) : ' : '✗ Analyse d\'amélioration : '}
                        </span>
                        <span>{opt.feedback}</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
