import React from 'react';
import {useNavigate} from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <button onClick={logoutHandler} >
        Logout
      </button>
  )
}

export default LogOut