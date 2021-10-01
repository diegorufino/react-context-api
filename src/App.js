import React from "react";
import Profile from "./components/profile";
import { AuthContext } from "./providers/auth";

function App() {
  const { setUser } = React.useContext(AuthContext);

  return (
    <div className="App">
      <h1>Olá</h1>
      <input type="text" onChange={(e) => setUser({ name: e.target.value })} />
      <Profile />
    </div>
  );
}

export default App;
