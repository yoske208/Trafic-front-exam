import React, { createContext, useEffect, useState } from "react";
import { IUser } from "../Interface/Interface";
import useFatch from "../Hooks/UseFetch";
const url = "http://localhost:4000/users";

export interface Props {
  children: React.ReactNode;
}

export interface UserProps {
  users: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export const UserConntext = React.createContext<UserProps | null>(null)


const UserProvider = ({ children }: Props) => {
  const [users, setUser] = useState<IUser[]>([]);
  const { getFatch, data } = useFatch<IUser[]>(url);
  useEffect(() => {
    getFatch();
  }, []);

  useEffect(() => {
    if (data) return setUser(data);
    console.log("no results");
  }, [data]);

  return (
    <div>
      <UserConntext.Provider value={{users,setUser }}>
        {children}
      </UserConntext.Provider>
    </div>
  );
};

export default UserProvider;
