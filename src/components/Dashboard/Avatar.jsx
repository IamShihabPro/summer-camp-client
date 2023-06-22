import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Avatar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="avatar online">
    <div className="w-20 rounded-full ring ring-info ring-offset-base-100 ">
      {user && <img src={user?.photoURL} />}
    </div>
  </div>
  );
};

export default Avatar;
