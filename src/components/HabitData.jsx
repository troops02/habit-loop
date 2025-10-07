import HabitList from './HabitList';

function HabitData({ habits, onDeleteHabit,onChangeStatus }) {
  return (
    <ul>
      {habits.map((habit) => (
        <HabitList
          habits={habit}
          key={habit.id}
          onDeleteHabit={onDeleteHabit}
          onChangeStatus={onChangeStatus}
        />
      ))}
    </ul>
  );
}

export default HabitData;
