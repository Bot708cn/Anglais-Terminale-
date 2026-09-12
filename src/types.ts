export type ExerciseType = 
  | 'multiple_choice' 
  | 'sentence_builder' 
  | 'fill_blank' 
  | 'error_hunter' 
  | 'listening_drill'
  | 'business_scenario';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  context?: string; // e.g. "Boardroom Meeting", "Bac 2026 Exam Check", "Job Interview"
  options?: string[];
  correctAnswer: string | string[];
  initialWords?: string[]; // for sentence_builder
  explanation: string; // Detailed pedagogical explanation based on MEN document & business usage
  hint?: string;
  audioText?: string;
  grammarFocus?: string;
}

export interface Lesson {
  id: string;
  unitId: number;
  title: string;
  description: string;
  xpReward: number;
  category: 'vocabulary' | 'grammar' | 'business_case' | 'bac_mastery';
  exercises: Exercise[];
}

export interface VocabItem {
  term: string;
  french: string;
  phonetic?: string;
  example: string;
  businessApplication: string;
  category?: string;
}

export interface GrammarRule {
  title: string;
  formula: string;
  frenchSummary: string;
  officialBacRule: string;
  examples: { english: string; french: string }[];
  commonTrap: string;
}

export interface Unit {
  id: number;
  number: string; // "01", "02", ...
  title: string;
  frenchTitle: string;
  businessTheme: string;
  executiveSummary: string;
  competenceVisee: string;
  methodiqueSpeciale?: {
    name: string;
    description: string;
    steps: { name: string; description: string }[];
  };
  keyVocabulary: VocabItem[];
  grammarPoints: GrammarRule[];
  examPractice: {
    type: string;
    prompt: string;
    instruction: string;
    correctAnswer: string;
    detailedExplanation: string;
  }[];
  lessons: Lesson[];
}

export type PersonalGoal = 
  | 'bac_distinction' 
  | 'business_executive' 
  | 'diplomacy_ngo' 
  | 'career_booster';

export interface UserProfile {
  name: string;
  avatar: string;
  goal: PersonalGoal;
  dailyGoalMinutes: number;
  dailyStreak: number;
  lastActiveDate: string;
  xp: number;
  executiveLevel: number;
  executiveRank: string;
  hearts: number; // Duolingo heart system (max 5)
  completedLessons: string[]; // lesson ids
  completedUnits: number[]; // unit numbers
  unitProgress: Record<number, number>; // 0 to 100 percentage
  mistakesBank: {
    id: string;
    exerciseId: string;
    unitId: number;
    question: string;
    correctAnswer: string;
    explanation: string;
    timestamp: number;
  }[];
  soundEnabled: boolean;
  audioSpeechEnabled: boolean;
}
