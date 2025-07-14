import { getAuth, signOut } from "firebase/auth";
import React from "react";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router";



const Logout = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogout = () => {
    
    signOut(auth).then(() => {
  // Sign-out successful.
    navigate("/");
    }).catch((error) => {
     // An error happened.
    });
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-5 py-2 bg-red-600 text-white font-semibold rounded cursor-pointer hover:bg-red-800"
      >
        Logout
      </button>

      
    </div>
  );
};

export default Logout;
