import React from "react";
import Profile from "./components/profile";
import { useAuth } from "./providers/auth";

function App() {
  const { setUser } = useAuth();

  return (
    <div className="App">
      <h1>Olá</h1>
      <input type="text" onChange={(e) => setUser({ name: e.target.value })} />
      <Profile />
    </div>
  );
}

export default App;
