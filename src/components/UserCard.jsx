import React from "react";

const UserCard = ({ name, email, phone }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title mb-2">{name}</h5>
        <p className="card-text mb-2">{email}</p>
        <p className="card-text">{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
