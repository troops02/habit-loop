import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <div className="h-screen bg-[#1C1C1C] font-roboto flex justify-center items-center flex-col">
        <h1 className="font-mediums text-5xl p-5 text-zinc-100">Habit Loop</h1>
        <div className="min-w-[53rem] h-[70%] bg-[#191818] rounded-[0.625rem] border border-[#373737] p-4">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
