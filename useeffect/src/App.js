import React, { useContext } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import AuthContext from "./Store/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

// function Counter() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `clicked ${count} `;
//   });
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{count}</p>
//         <button onClick={() => setCount(count + 1)}>clicked</button>
//       </header>
//     </div>
//   );
// }
