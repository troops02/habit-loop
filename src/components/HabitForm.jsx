import { useState } from 'react';
import Button from './Button';

export default function HabitForm({ onAddHabits }) {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('daily');

  function handleSubmitHabits(e) {
    e.preventDefault();
    if (!name) {
      alert('Add Habit');
      return;
    }

    const newHabit = { name, frequency, id: Date.now(), status: 'not started' };
    onAddHabits(newHabit);
    setName('');
    setFrequency('daily');
  }

  return (
    <form
      className="my-2 grid-cols-1 grid gap-3 text-white"
      onSubmit={handleSubmitHabits}
    >
      <input
        className="focus:outline-none focus:ring-2 focus:ring-indigo-500 border p-2 rounded-md focus:border-indigo-200 border-gray-300"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add a Habit"
      />

      <select
        name="frequency"
        id=""
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        className="p-2 bg-[#3f3e3e] rounded-md"
      >
        <option value="daily">Daily</option>
        <option value="weekly">weekly</option>
      </select>

      <Button styles={`bg-amber-500 px-3 py-2 rounded-md`}>Enter Habit</Button>
    </form>
  );
}
