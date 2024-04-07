import { BrowserRouter, Route, Routes, useActionData } from "react-router-dom";
import Login from "./auth/login";
import Signup from "./auth/signup";
import { Home } from "./pages/home";
import { Admin } from "./components/AdminPanel";
import { useEffect, useState } from "react";
import { Protector } from "./utils/Protector";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in", user);
        setUser(user);
        setLoader(false);
      } else {
        // User is signed out
        console.log("User is signed out");
        setLoader(false);
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  console.log(user);

  if (loader) {
    return (<div>Loading...</div>);
  } 
  else {
    return (
      <>
        <Routes>
          <Route element={<Protector user={user} />}>
            <Route path="admin" element={<Admin setUser={setUser} setLoader={setLoader} />} />
          </Route>
          <Route path="/" element={<Home user={user} setUser={setUser} setLoader={setLoader} />} />
          <Route path="login" element={<Login setUser={setUser} user={user} />}/>
          <Route path="signup" element={<Signup user={user}/>} />
        </Routes>
      </>
    );
  }
}
export default App;
