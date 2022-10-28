import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscrive = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return () => {
      unsubscrive();
    };
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        {!user ? (
          <Route path="/login" element={<Login />} />
        ) : (
          // <Route path="/register" element={<Register />} />

          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
