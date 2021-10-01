import React from "react";
import { AuthContext } from "./providers/auth";

function App() {
  const { user } = React.useContext(AuthContext);
  console.log(user);
  return (
    <div className="App">
      <h1>Nome: {user.name}</h1>
    </div>
  );
}

export default App;
