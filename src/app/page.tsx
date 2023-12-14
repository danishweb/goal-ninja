'use client'
import { useState } from 'react';
import useGoalStore from '@/store/goal-store';

export default function Home() {
  const { goals, addGoal } = useGoalStore();
  const [newGoal, setNewGoal] = useState<string>('');

  const handleAddGoal = () => {
    if (newGoal.trim() !== '') {
      addGoal({name:newGoal});
      setNewGoal('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Goal Ninja</h1>

      <div className="w-80">
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
          placeholder="Enter your goal"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <button
          onClick={handleAddGoal}
          className="w-full bg-blue-500 text-white font-bold py-2 rounded"
        >
          Add Goal
        </button>
      </div>

      <div className="mt-8 w-80">
        <h2 className="text-xl font-semibold mb-4">Goals:</h2>
        <ul>
          {goals.map((goal, index) => (
            <li key={index} className="mb-2">
              {goal.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
