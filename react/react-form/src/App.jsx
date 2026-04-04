import { useState } from "react";
import "./App.css";

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
   const [user, setUser] = useState('')
  return (
    <main className="app">
      <div className="form-wrapper">
        <form onSubmit={submitHandler} className="form-card">
          <div className="form-header">
            <h1> Form</h1>
            <p>Enter something and submit the form.</p>
          </div>

          <div className="form-row">
            <input
            required
              type="text"
              placeholder="Enter your text 
              className="form-input
              value={user}
              onChange={(e)=>{
                console.log(e.target.value);
                setUser (e.target.value)
              }}
            />

            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;