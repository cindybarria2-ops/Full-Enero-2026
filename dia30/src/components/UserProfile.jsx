import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const user = useContext(UserContext);

  return <h2>Usuario: {user.name}</h2>;
};

export default UserProfile;