import React from 'react';
import { UserProfile } from '../types';
import { Flame, Zap, Heart, Volume2, VolumeX, Award, BookOpen, Compass, ShieldAlert, UserCheck } from 'lucide-react';

interface NavbarProps {
  userProfile: UserProfile;
  activeTab: 'roadmap' | 'curriculum' | 'exam_business' | 'review' | 'profile';
  onTabChange: (tab: 'roadmap' | 'curriculum' | 'exam_business' | 'review' | 'profile') => void;
  onToggleSound: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  userProfile,
  activeTab,
  onTabChange,
  onToggleSound,
  onOpenProfile
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-blue-950/80 bg-[#071329]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Tag */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('roadmap')}>
            <img 
              src="/logo.png" 
              alt="English Terminale MEN Madagascar" 
              className="w-11 h-11 rounded-full border-2 border-sky-400 shadow-lg shadow-sky-500/20 object-cover shrink-0" 
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg text-white tracking-tight">ExecLingo</span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40">
                  MEN Madagascar 2026/2027
                </span>
              </div>
              <p className="text-xs text-sky-200/70 hidden sm:block">Anglais des Affaires & Bac Terminale (10 Unités)</p>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0b1b36] p-1 rounded-xl border border-blue-900/50">
            <button
              onClick={() => onTabChange('roadmap')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-blue-900/40'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-sky-300" />
              Parcours
            </button>

            <button
              onClick={() => onTabChange('curriculum')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'curriculum'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-blue-900/40'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              10 Unités MEN
            </button>

            <button
              onClick={() => onTabChange('exam_business')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'exam_business'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-blue-900/40'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Mode Bac & Affaires
            </button>

            <button
              onClick={() => onTabChange('review')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all relative cursor-pointer ${
                activeTab === 'review'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-blue-900/40'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              Révision
              {userProfile.mistakesBank.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center">
                  {userProfile.mistakesBank.length}
                </span>
              )}
            </button>
          </nav>

          {/* Gamified Executive Gauges & Profile */}
          <div className="flex items-center gap-2.5">
            {/* Daily Streak */}
            <div 
              className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 rounded-xl cursor-pointer hover:bg-amber-500/25 transition-all"
              title={`${userProfile.dailyStreak} jours consécutifs d'apprentissage`}
              onClick={onOpenProfile}
            >
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-amber-300">{userProfile.dailyStreak}</span>
            </div>

            {/* XP Points */}
            <div 
              className="flex items-center gap-1.5 bg-sky-500/15 border border-sky-500/30 px-2.5 py-1 rounded-xl cursor-pointer hover:bg-sky-500/25 transition-all"
              title={`${userProfile.xp} Points d'expérience Executive`}
              onClick={onOpenProfile}
            >
              <Zap className="w-4 h-4 text-sky-400 fill-sky-400" />
              <span className="text-xs font-bold text-sky-300">{userProfile.xp} XP</span>
            </div>

            {/* Focus Hearts */}
            <div 
              className="flex items-center gap-1.5 bg-rose-500/15 border border-rose-500/30 px-2.5 py-1 rounded-xl"
              title={`${userProfile.hearts}/5 Énergie Focus`}
            >
              <Heart className={`w-4 h-4 ${userProfile.hearts > 0 ? 'text-rose-500 fill-rose-500' : 'text-slate-500'}`} />
              <span className="text-xs font-bold text-rose-300">{userProfile.hearts}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              className="p-2 rounded-xl bg-[#0b1b36] hover:bg-blue-900/50 text-slate-300 hover:text-white border border-blue-900/50 transition-colors cursor-pointer"
              title={userProfile.soundEnabled ? 'Désactiver les sons' : 'Activer les sons'}
            >
              {userProfile.soundEnabled ? (
                <Volume2 className="w-4 h-4 text-sky-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* User Profile Button */}
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0b1b36] hover:bg-blue-900/50 border border-blue-900/50 transition-all text-left cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-700/60 flex items-center justify-center text-sm border border-blue-500/40">
                {userProfile.avatar}
              </div>
              <div className="hidden lg:block pr-1.5">
                <p className="text-[11px] font-bold text-white leading-tight truncate max-w-[100px]">
                  {userProfile.name}
                </p>
                <p className="text-[9px] text-sky-300 font-semibold leading-tight">
                  Niv. {userProfile.executiveLevel}
                </p>
              </div>
            </button>

          </div>

        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1 border-t border-blue-950/80 no-scrollbar">
          <button
            onClick={() => onTabChange('roadmap')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer ${
              activeTab === 'roadmap' ? 'bg-blue-600 text-white' : 'text-slate-300'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-sky-300" /> Parcours
          </button>
          <button
            onClick={() => onTabChange('curriculum')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer ${
              activeTab === 'curriculum' ? 'bg-blue-600 text-white' : 'text-slate-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> 10 Unités
          </button>
          <button
            onClick={() => onTabChange('exam_business')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer ${
              activeTab === 'exam_business' ? 'bg-blue-600 text-white' : 'text-slate-300'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-400" /> Bac & Affaires
          </button>
          <button
            onClick={() => onTabChange('review')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer ${
              activeTab === 'review' ? 'bg-blue-600 text-white' : 'text-slate-300'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" /> Révision
          </button>
        </div>

      </div>
    </header>
  );
};
