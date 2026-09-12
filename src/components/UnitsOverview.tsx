import React, { useState } from 'react';
import { Unit, VocabItem, GrammarRule } from '../types';
import { 
  BookOpen, 
  Search, 
  Volume2, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Award,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  Lightbulb
} from 'lucide-react';
import { speakEnglish } from '../utils/audio';

interface UnitsOverviewProps {
  units: Unit[];
  selectedUnitId?: number;
  onSelectUnit?: (unitId: number) => void;
}

export const UnitsOverview: React.FC<UnitsOverviewProps> = ({
  units,
  selectedUnitId = 1,
  onSelectUnit
}) => {
  const [currentUnitId, setCurrentUnitId] = useState<number>(selectedUnitId);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSubTab, setActiveSubTab] = useState<'vocab' | 'grammar' | 'exam_types'>('vocab');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});

  const currentUnit = units.find(u => u.id === currentUnitId) || units[0];

  const toggleSolution = (idx: number) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const filteredVocab = currentUnit.keyVocabulary.filter(v => 
    v.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.french.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.businessApplication.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGrammar = currentUnit.grammarPoints.filter(g =>
    g.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.frenchSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.formula.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>Référentiel Officiel MEN Madagascar — 10 Unités</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Encyclopédie d'Excellence & Révision
          </h1>
          <p className="text-sm text-sky-200/70">
            Vocabulaire thématique, règles grammaticales strictes, pièges d'examen et corrigés types.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Rechercher une notion, un mot..."
            className="w-full pl-10 pr-4 py-2 bg-[#0a1b38] border border-blue-900/60 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-sky-400"
          />
        </div>
      </div>

      {/* Unit Selector Pills (10 Units) */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {units.map(unit => {
          const isSelected = unit.id === currentUnitId;
          return (
            <button
              key={unit.id}
              onClick={() => {
                setCurrentUnitId(unit.id);
                if (onSelectUnit) onSelectUnit(unit.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-1 ring-sky-400'
                  : 'bg-[#0a1a36] hover:bg-blue-950 text-slate-300 border border-blue-900/50 hover:border-blue-700'
              }`}
            >
              <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${
                isSelected ? 'bg-white text-blue-950' : 'bg-blue-900/80 text-sky-300'
              }`}>
                {unit.number}
              </span>
              <span>{unit.title}</span>
            </button>
          );
        })}
      </div>

      {/* Current Unit Master Card */}
      <div className="bg-[#081836]/90 border border-blue-900/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-blue-950/40">
        
        {/* Unit Info Box */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-blue-900/50">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-sky-500/20 text-sky-300 font-bold text-xs border border-sky-400/40">
                Unité {currentUnit.number}
              </span>
              <span className="text-xs text-sky-200/60 font-medium">Compétence : {currentUnit.competenceVisee}</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{currentUnit.title}</h2>
            <p className="text-sm font-medium text-sky-200/80 italic">{currentUnit.frenchTitle}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0b2149]/80 border border-blue-800/60 max-w-sm">
            <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" /> Contexte Affaires & Exécutif
            </p>
            <p className="text-xs text-slate-200 leading-snug">
              {currentUnit.businessTheme}
            </p>
          </div>
        </div>

        {/* Special Methodology Section (e.g. 3H Method for Unit 1) */}
        {currentUnit.methodiqueSpeciale && (
          <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/40 space-y-3">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-white text-sm sm:text-base">
                {currentUnit.methodiqueSpeciale.name}
              </h3>
            </div>
            <p className="text-xs text-slate-300">
              {currentUnit.methodiqueSpeciale.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {currentUnit.methodiqueSpeciale.steps.map((step, idx) => (
                <div key={idx} className="p-3 bg-[#08152e] rounded-xl border border-purple-500/30">
                  <p className="text-xs font-bold text-purple-300 mb-1">{step.name}</p>
                  <p className="text-xs text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-Tabs: Vocabulaire (Green) / Grammaire (Orange) / Exercices Types (Red) */}
        <div className="flex items-center gap-2 border-b border-blue-900/50 pb-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveSubTab('vocab')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeSubTab === 'vocab'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-300 hover:text-white hover:bg-blue-950'
            }`}
          >
            Vocabulaire Thématique ({filteredVocab.length})
          </button>

          <button
            onClick={() => setActiveSubTab('grammar')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeSubTab === 'grammar'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-300 hover:text-white hover:bg-blue-950'
            }`}
          >
            Grammaire Clé & Pièges Bac ({filteredGrammar.length})
          </button>

          <button
            onClick={() => setActiveSubTab('exam_types')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeSubTab === 'exam_types'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-300 hover:text-white hover:bg-blue-950'
            }`}
          >
            Exercices Types & Corrigés Bac ({currentUnit.examPractice.length})
          </button>
        </div>

        {/* Content 1: Key Vocabulary */}
        {activeSubTab === 'vocab' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredVocab.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-[#091a38] border border-blue-900/50 hover:border-emerald-500/50 transition-all space-y-2.5 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                      {item.term}
                    </h4>
                    <p className="text-xs text-sky-200/70 font-medium">{item.french}</p>
                  </div>
                  <button
                    onClick={() => speakEnglish(item.term)}
                    className="p-2 rounded-xl bg-[#06142a] hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 border border-blue-900/60 transition-colors cursor-pointer"
                    title="Écouter la prononciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-2.5 rounded-xl bg-[#06142a] border border-blue-900/40 text-xs">
                  <p className="text-slate-200 italic mb-1">« {item.example} »</p>
                  <button
                    onClick={() => speakEnglish(item.example)}
                    className="text-[10px] text-emerald-400 hover:underline flex items-center gap-1 mt-1 cursor-pointer"
                  >
                    <Volume2 className="w-3 h-3" /> Écouter l'exemple
                  </button>
                </div>

                <div className="text-[11px] text-emerald-400 font-medium">
                  💼 <span className="text-slate-300">{item.businessApplication}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content 2: Grammar Rules & Traps */}
        {activeSubTab === 'grammar' && (
          <div className="space-y-6">
            {filteredGrammar.map((rule, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#091a38] border border-blue-900/50 space-y-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{rule.title}</h4>
                    <p className="text-xs text-sky-200/70 mt-0.5">{rule.frenchSummary}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-[11px] font-bold border border-amber-500/30 whitespace-nowrap">
                    Formule Obligatoire
                  </span>
                </div>

                {/* Mathematical / Linguistic Formula Block */}
                <div className="p-3.5 rounded-xl bg-[#051126] border border-amber-500/30 font-mono text-xs sm:text-sm text-amber-300 font-semibold overflow-x-auto">
                  {rule.formula}
                </div>

                {/* Official Rule Quote */}
                <div className="p-3 rounded-xl bg-[#06142a] border border-blue-900/40 text-xs text-slate-300">
                  <span className="font-bold text-white">Exemple officiel MEN : </span>
                  {rule.officialBacRule}
                </div>

                {/* Examples */}
                <div className="space-y-1.5 text-xs">
                  <p className="font-semibold text-sky-300 uppercase text-[10px] tracking-wider">Modèles en contexte :</p>
                  {rule.examples.map((ex, exIdx) => (
                    <div key={exIdx} className="flex items-start justify-between gap-3 p-2.5 bg-[#06142a] border border-blue-950 rounded-xl">
                      <div>
                        <p className="text-white font-medium">{ex.english}</p>
                        <p className="text-sky-200/70 italic text-[11px]">{ex.french}</p>
                      </div>
                      <button
                        onClick={() => speakEnglish(ex.english)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 cursor-pointer shrink-0"
                        title="Écouter la phrase"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* The Bac Exam Trap Highlight Box */}
                <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-2.5 text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-400">Piège fréquent au Baccalauréat : </span>
                    <span className="text-amber-200/90">{rule.commonTrap}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Content 3: Exam Practice & Official Key */}
        {activeSubTab === 'exam_types' && (
          <div className="space-y-4">
            {currentUnit.examPractice.map((ex, idx) => {
              const isRevealed = !!revealedSolutions[idx];
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-[#091a38] border border-blue-900/50 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
                      {ex.type}
                    </span>
                    <span className="text-xs text-sky-300/70 font-mono">Épreuve Référentiel MEN</span>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-300 mb-1">{ex.instruction}</p>
                    <div className="p-4 bg-[#051126] rounded-xl border border-blue-900/50 text-sm font-medium text-slate-200 whitespace-pre-line leading-relaxed">
                      {ex.prompt}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => toggleSolution(idx)}
                      className="px-4 py-2 rounded-xl bg-[#0b2149] hover:bg-blue-900/60 text-slate-200 text-xs font-bold border border-blue-800/60 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>{isRevealed ? 'Masquer le corrigé officiel' : 'Afficher le corrigé officiel & explication'}</span>
                      {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isRevealed && (
                      <div className="mt-3 p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2 animate-in fade-in duration-200">
                        <div className="flex items-center gap-2 text-rose-300 font-bold text-xs">
                          <CheckCircle2 className="w-4 h-4 text-rose-400" />
                          <span>Réponse officielle attendue :</span>
                        </div>
                        <p className="font-mono text-sm text-rose-200 font-bold whitespace-pre-line">
                          {ex.correctAnswer}
                        </p>
                        <div className="pt-2 border-t border-rose-500/20 text-xs text-slate-300 leading-relaxed">
                          <span className="font-semibold text-rose-400">Règle appliquée : </span>
                          {ex.detailedExplanation}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
};
