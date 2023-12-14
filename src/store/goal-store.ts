import { getLocalStorage, setLocalStorage } from "@/utils/local-storage";
import { create } from "zustand";

type Goal = {
  name: string;
};

type Store = {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
};

const useGoalStore = create<Store>((set) => ({
  goals: getLocalStorage("goals") || [],

  addGoal: (newGoal) => {
    set((state) => {
      const updatedGoals = [...state.goals, newGoal];
      setLocalStorage("goals", updatedGoals);
      return { goals: updatedGoals };
    });
  },
}));

export default useGoalStore;
