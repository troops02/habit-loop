import Button from './Button';

function HabitList({ habits, onDeleteHabit, onChangeStatus }) {
  function handleOnChangeStatus(e) {
    const newStatus = e.target.value;
    onChangeStatus(habits.id, newStatus);
  }

  if (habits.status === 'done')
    setTimeout(() => {
      onDeleteHabit(habits.id);
    }, 1000);

  return (
    <li className="w-full h-8 p-6 bg-[#1C1C1C] rounded-md flex justify-around items-center border border-[#373737] my-2 text-zinc-200">
      <span className="px-2.5">{habits.name}</span>
      <span className="px-2.5">{habits.frequency}</span>

      {habits.status === 'not started' && (
        <div className="w-3 h-3 rounded-2xl bg-red-500"></div>
      )}

      {habits.status === 'in progress' && (
        <div className="w-3 h-3 rounded-2xl bg-amber-500"></div>
      )}

      {habits.status === 'done' && (
        <div className="w-3 h-3 rounded-2xl bg-green-500"></div>
      )}

      <select
        name="status"
        id=""
        className="py-1 rounded-full bg-[#191818]"
        onChange={handleOnChangeStatus}
      >
        <option value="not started">Not Started</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <Button
        onClick={() => onDeleteHabit(habits.id)}
        styles={`py-auto px-2 rounded-2xl bg-indigo-500`}
      >
        delete
      </Button>
    </li>
  );
}

export default HabitList;
