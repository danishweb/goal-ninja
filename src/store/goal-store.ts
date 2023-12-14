import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Goal = {
  name: string;
};

type GoalsState = {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
};

const useGoalStore = create<GoalsState>()(
  persist(
    (set) => ({
      goals: [],
      addGoal: (newGoal) => {
        set((state) => ({ goals: [...state.goals, newGoal] }));
      },
    }),
    {
      name: "goals",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useGoalStore;
