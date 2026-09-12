import React, { useState, useEffect } from 'react';
import { Lesson, Exercise, UserProfile } from '../types';
import { UNITS_DATA } from '../data/unitsData';
import { X, Volume2, CheckCircle2, AlertCircle, ArrowRight, Zap, Trophy, RotateCcw, Sparkles } from 'lucide-react';
import { playSuccessSound, playErrorSound, playCompletionFanfare, speakEnglish } from '../utils/audio';
import confetti from 'canvas-confetti';

interface LessonModalProps {
  lesson: Lesson;
  userProfile: UserProfile;
  onClose: () => void;
  onComplete: (xpEarned: number, updatedMistakes?: UserProfile['mistakesBank']) => void;
  onMistakeMade: (exercise: Exercise, userAnswer: string) => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  userProfile,
  onClose,
  onComplete,
  onMistakeMade
}) => {
  const exercises = lesson.exercises;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentExercise = exercises[currentIndex];

  // User input states
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);

  // Feedback state
  const [status, setStatus] = useState<'answering' | 'correct' | 'incorrect'>('answering');
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Initialize exercise state
  useEffect(() => {
    if (!currentExercise) return;
    setStatus('answering');
    setSelectedOption(null);

    if (currentExercise.type === 'sentence_builder' && currentExercise.initialWords) {
      // Shuffle words slightly or keep randomized
      const shuffled = [...currentExercise.initialWords].sort(() => Math.random() - 0.5);
      setAvailableWords(shuffled);
      setSelectedWords([]);
    }
  }, [currentIndex, currentExercise]);

  const handleWordSelect = (word: string, index: number) => {
    if (status !== 'answering') return;
    setSelectedWords(prev => [...prev, word]);
    setAvailableWords(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleWordRemove = (word: string, index: number) => {
    if (status !== 'answering') return;
    setSelectedWords(prev => prev.filter((_, idx) => idx !== index));
    setAvailableWords(prev => [...prev, word]);
  };

  const handleSpeak = (text?: string, slow = false) => {
    if (!text) return;
    speakEnglish(text, slow);
  };

  const handleCheckAnswer = () => {
    if (status !== 'answering') return;

    let isAnswerCorrect = false;
    let givenAnswer = '';

    if (currentExercise.type === 'sentence_builder') {
      givenAnswer = selectedWords.join(' ').trim();
      const expected = Array.isArray(currentExercise.correctAnswer)
        ? currentExercise.correctAnswer[0]
        : currentExercise.correctAnswer;
      isAnswerCorrect = givenAnswer.toLowerCase() === expected.toLowerCase();
    } else {
      givenAnswer = selectedOption || '';
      if (Array.isArray(currentExercise.correctAnswer)) {
        isAnswerCorrect = currentExercise.correctAnswer.includes(givenAnswer);
      } else {
        isAnswerCorrect = givenAnswer.trim().toLowerCase() === currentExercise.correctAnswer.trim().toLowerCase();
      }
    }

    if (isAnswerCorrect) {
      setStatus('correct');
      setCorrectCount(prev => prev + 1);
      if (userProfile.soundEnabled) playSuccessSound();
    } else {
      setStatus('incorrect');
      if (userProfile.soundEnabled) playErrorSound();
      onMistakeMade(currentExercise, givenAnswer);
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finished all exercises
      setIsCompleted(true);
      if (userProfile.soundEnabled) playCompletionFanfare();
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }
  };

  const progressPercent = Math.round(((currentIndex + (status !== 'answering' ? 1 : 0)) / exercises.length) * 100);

  // Lesson summary view when finished
  if (isCompleted) {
    const accuracy = Math.round((correctCount / exercises.length) * 100);
    const xpBonus = lesson.xpReward + (accuracy === 100 ? 10 : 0);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050e1f]/90 backdrop-blur-md">
        <div className="w-full max-w-md bg-[#081836] border border-blue-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-950/60 text-center animate-in fade-in zoom-in duration-300">
          
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-1 shadow-xl shadow-blue-500/30 mb-5 flex items-center justify-center">
            <div className="w-full h-full bg-[#071329] rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10 text-sky-400 animate-bounce" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-white mb-2">Module Validé !</h2>
          <p className="text-sky-200/70 text-sm mb-6">
            Compétence acquise selon le référentiel MEN & Standards Professionnels.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-[#06142a] border border-blue-900/60 p-4 rounded-2xl">
              <p className="text-xs text-sky-300/80 mb-1 flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5 text-sky-400" /> Points XP
              </p>
              <p className="text-2xl font-black text-sky-400">+{xpBonus}</p>
            </div>
            <div className="bg-[#06142a] border border-blue-900/60 p-4 rounded-2xl">
              <p className="text-xs text-sky-300/80 mb-1 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Précision
              </p>
              <p className="text-2xl font-black text-amber-400">{accuracy}%</p>
            </div>
          </div>

          <button
            onClick={() => onComplete(xpBonus)}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            Enregistrer & Continuer le Parcours
          </button>
        </div>
      </div>
    );
  }

  const isCheckDisabled = currentExercise.type === 'sentence_builder'
    ? selectedWords.length === 0
    : !selectedOption;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#071329] text-slate-100 select-none overflow-hidden">
      
      {/* Top Header: Progress bar & controls */}
      <div className="max-w-4xl w-full mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <button
          onClick={onClose}
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-blue-950 transition-colors cursor-pointer"
          title="Quitter la leçon"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress bar */}
        <div className="flex-1 h-3.5 bg-[#0a1a36] rounded-full overflow-hidden p-0.5 border border-blue-900/60">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center gap-1 text-xs font-semibold text-sky-300 bg-[#0a1b38] border border-blue-900/60 px-3 py-1.5 rounded-xl">
          <span>Question {currentIndex + 1}/{exercises.length}</span>
        </div>
      </div>

      {/* Main Exercise Canvas */}
      <div className="flex-1 max-w-3xl w-full mx-auto px-4 py-4 overflow-y-auto flex flex-col justify-center">
        
        {/* Context badge if provided */}
        {currentExercise.context && (
          <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{currentExercise.context}</span>
          </div>
        )}

        {/* Question Title & Audio Speaker */}
        <div className="flex items-start justify-between gap-3 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
            {currentExercise.question}
          </h2>
          {currentExercise.audioText && (
            <button
              onClick={() => handleSpeak(currentExercise.audioText)}
              className="p-3 rounded-2xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-sky-300 transition-transform active:scale-95 cursor-pointer shrink-0"
              title="Écouter la prononciation authentique"
            >
              <Volume2 className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Exercise UI by Type */}
        {currentExercise.type === 'multiple_choice' || currentExercise.type === 'fill_blank' || currentExercise.type === 'error_hunter' ? (
          <div className="grid grid-cols-1 gap-3">
            {currentExercise.options?.map((option, idx) => {
              const isSelected = selectedOption === option;
              let itemBorder = 'border-blue-900/50 hover:border-blue-700 bg-[#091a38]';

              if (status === 'answering' && isSelected) {
                itemBorder = 'border-sky-400 bg-blue-900/40 shadow-md shadow-sky-500/20';
              } else if (status === 'correct' && isSelected) {
                itemBorder = 'border-emerald-500 bg-emerald-950/40 text-emerald-200';
              } else if (status === 'incorrect') {
                if (isSelected) {
                  itemBorder = 'border-rose-500 bg-rose-950/40 text-rose-200';
                } else if (
                  Array.isArray(currentExercise.correctAnswer)
                    ? currentExercise.correctAnswer.includes(option)
                    : currentExercise.correctAnswer === option
                ) {
                  itemBorder = 'border-emerald-500/60 bg-emerald-950/20 text-emerald-300';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => status === 'answering' && setSelectedOption(option)}
                  disabled={status !== 'answering'}
                  className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${itemBorder} cursor-pointer active:scale-[0.99]`}
                >
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 border ${
                    isSelected 
                      ? 'bg-blue-600 text-white border-sky-300' 
                      : 'bg-[#06142a] text-sky-300/70 border-blue-900/60'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-100">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        ) : currentExercise.type === 'sentence_builder' ? (
          <div className="space-y-6">
            {/* Slot area where selected words go */}
            <div className="min-h-[90px] p-4 rounded-2xl border-2 border-dashed border-blue-800/60 bg-[#051124] flex flex-wrap gap-2 items-center">
              {selectedWords.length === 0 ? (
                <p className="text-sky-300/50 text-sm italic">Cliquez sur les mots ci-dessous pour assembler la phrase correcte...</p>
              ) : (
                selectedWords.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleWordRemove(word, idx)}
                    disabled={status !== 'answering'}
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm sm:text-base shadow-sm transition-transform active:scale-95 cursor-pointer"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>

            {/* Word bank pool */}
            <div className="flex flex-wrap gap-2.5 justify-center p-3.5 bg-[#091a38] rounded-2xl border border-blue-900/50">
              {availableWords.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWordSelect(word, idx)}
                  disabled={status !== 'answering'}
                  className="px-3.5 py-2 rounded-xl bg-[#06142a] hover:bg-blue-950 border border-blue-800/60 text-slate-100 font-medium text-sm sm:text-base transition-all active:scale-95 cursor-pointer hover:border-sky-400"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        ) : null}

      </div>

      {/* Bottom Evaluation Tray (Duolingo style) */}
      <div className={`w-full border-t transition-all duration-300 ${
        status === 'correct' 
          ? 'bg-[#051c14]/95 border-emerald-500/50' 
          : status === 'incorrect' 
          ? 'bg-[#21090d]/95 border-rose-500/50' 
          : 'bg-[#081836] border-blue-900/60'
      }`}>
        <div className="max-w-3xl mx-auto px-4 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {status === 'answering' ? (
            <div className="text-xs text-sky-200/70 hidden sm:block">
              {currentExercise.hint && (
                <span>💡 Indice : {currentExercise.hint}</span>
              )}
            </div>
          ) : status === 'correct' ? (
            <div className="flex items-start gap-3 w-full sm:w-auto">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-emerald-400 text-base">Excellent ! Réponse exacte.</p>
                <p className="text-xs sm:text-sm text-emerald-200/90 max-w-xl">
                  {currentExercise.explanation}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3 w-full sm:w-auto">
              <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-rose-400 text-base">
                  À retenir : {Array.isArray(currentExercise.correctAnswer) ? currentExercise.correctAnswer[0] : currentExercise.correctAnswer}
                </p>
                <p className="text-xs sm:text-sm text-rose-200/90 max-w-xl">
                  {currentExercise.explanation}
                </p>
              </div>
            </div>
          )}

          {status === 'answering' ? (
            <button
              onClick={handleCheckAnswer}
              disabled={isCheckDisabled}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all ${
                isCheckDisabled
                  ? 'bg-[#0a1936] text-slate-500 cursor-not-allowed border border-blue-950'
                  : 'bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer'
              }`}
            >
              Vérifier
            </button>
          ) : (
            <button
              onClick={handleNext}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                status === 'correct'
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30'
                  : 'bg-rose-500 hover:bg-rose-400 text-white shadow-lg shadow-rose-500/30'
              }`}
            >
              <span>Continuer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

        </div>
      </div>

    </div>
  );
};
