import React from "react";
import { IUser } from "../../Interface/Interface";

interface Props {
  user: IUser;
}

const UserComp = ({ user }: Props) => {
  if (user) {
    return (
      <>
        <div className="card-list">
          <div className="card">
            <h4>User Name: {user.name}</h4>
            <h3>User Email {user.email}</h3>
            <h3>User Role {user.role}</h3>
            <div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default UserComp;
