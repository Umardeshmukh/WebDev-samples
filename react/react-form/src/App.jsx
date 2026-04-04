import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newAllUsers = [...allUsers];
 
    newAllUsers.push(title)
    setAllUsers(newAllUsers);
    setTitle('');
    console.log(newAllUsers);
    console.log("Form submitted");
  };

  return (
    <main className="app">
      <div className="form-wrapper">
        <form onSubmit={submitHandler} className="form-card">
          <div className="form-header">
            <h1>Form</h1>
            <p>Enter something and submit the form.</p>
          </div>

          <div className="form-row">
            <input
             required
              type="text"
              placeholder="Enter your text"
              className="form-input"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </form>
        {allUsers.map((e, index) => {
  return (
    <div
      key={index}
      className="relative w-80 mb-6 
        bg-gradient-to-br from-cyan-200/60 via-blue-100/50 to-teal-200/60
        backdrop-blur-md rounded-2xl
        border border-white/60
        shadow-[0_8px_24px_rgba(56,189,248,0.25),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(56,189,248,0.15)]
        hover:shadow-[0_16px_40px_rgba(56,189,248,0.45),inset_0_1px_0_rgba(255,255,255,0.9)]
        hover:-translate-y-2 hover:scale-[1.02]
        transition-all duration-300 cursor-default overflow-hidden"
      style={{ aspectRatio: '4/3' }}
    >

      {/* Top-left glare shine */}
      <div className="absolute top-3 left-5 w-20 h-5 
        bg-white/50 rounded-full blur-md pointer-events-none" />

      {/* Secondary small glare */}
      <div className="absolute top-5 left-6 w-8 h-2 
        bg-white/70 rounded-full blur-sm pointer-events-none" />

      {/* Bottom reflection streak */}
      <div className="absolute bottom-4 right-8 w-12 h-3 
        bg-white/20 rounded-full blur-md pointer-events-none" />

      {/* Large background bubble (decorative) */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 
        rounded-full bg-cyan-300/20 blur-2xl pointer-events-none" />
      <div className="absolute -top-8 -left-8 w-32 h-32 
        rounded-full bg-blue-300/20 blur-2xl pointer-events-none" />

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">

        {/* Top row — index badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest uppercase 
            text-cyan-700/70">
            User
          </span>
          <span className="w-7 h-7 rounded-full flex items-center justify-center
            bg-white/40 border border-white/60 text-cyan-800 text-xs font-black
            shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            {index + 1}
          </span>
        </div>

        {/* Center — main name */}
        <div className="flex items-center gap-3">
          {/* Glowing bubble dot */}
          <span className="w-3 h-3 rounded-full shrink-0
            bg-gradient-to-br from-cyan-400 to-blue-500
            shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
          <h2 className="text-cyan-950 font-bold text-2xl tracking-tight leading-tight">
            {e}
          </h2>
        </div>

        {/* Bottom row — decorative */}
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i}
              className="h-1.5 rounded-full bg-cyan-400/40 border border-white/40"
              style={{ width: `${[40, 24, 16][i]}px` }}
            />
          ))}
          <span className="ml-auto text-xs text-cyan-700/50 font-medium">
            🫧
          </span>
        </div>

      </div>
    </div>
  );
})}
      </div>
    </main>
  );
}

export default App;