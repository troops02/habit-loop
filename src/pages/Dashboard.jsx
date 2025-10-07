import { useState } from 'react';
import HabitForm from '../components/HabitForm';
import HabitData from '../components/HabitData';
import Button from '../components/Button';

function Dashboard() {
  const [habits, setHabit] = useState([]);
  const [addHabits, setAddHabits] = useState(false);

  function handleAddHabits(addHabit) {
    setHabit((habit) => [...habit, addHabit]);
    setAddHabits(false);
  }

  function handleDeleteHabit(id) {
    setHabit((habits) => habits.filter((habit) => habit.id !== id));
  }

  function handleChangeStatus(id, value) {
    setHabit((habits) =>
      habits.map((habit) =>
        habit.id === id ? { ...habit, status: value } : habit
      )
    );
  }

  return (
    <div className="flex space-x-2 h-full">
      <div className="border border-[#373737] w-1/3 h-full rounded-md p-4">
        {addHabits && <HabitForm onAddHabits={handleAddHabits} />}
        <Button
          onClick={() => setAddHabits((s) => !s)}
          styles={`bg-indigo-500 py-2 px-6 rounded-lg text-white`}
        >
          Add Habit
        </Button>
      </div>
      {habits.length === 0 ? (
        <p className="text-zinc-100">Please add a habit✅</p>
      ) : (
        <div className="border border-[#373737] flex-1 p-4 rounded-md overflow-y-auto min-h-0">
          <HabitData
            habits={habits}
            onDeleteHabit={handleDeleteHabit}
            onChangeStatus={handleChangeStatus}
          />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
