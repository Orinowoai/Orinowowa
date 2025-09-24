import { create } from "zustand";

type User = {
  id: string;
  name: string;
  xp: number;
  achievements: string[];
};

type State = {
  user: User;
  leaderboard: User[];
  addXP: (amount: number) => void;
  unlockAchievement: (id: string) => void;
};

export const useGamification = create<State>((set) => ({
  user: { id: "me", name: "You", xp: 0, achievements: [] },
  leaderboard: [],
  addXP: (amount) =>
    set((state) => ({
      user: { ...state.user, xp: state.user.xp + amount },
    })),
  unlockAchievement: (id) =>
    set((state) => ({
      user: {
        ...state.user,
        achievements: [...new Set([...state.user.achievements, id])],
      },
    })),
}));
