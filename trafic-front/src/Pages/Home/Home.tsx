import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserConntext } from "../../Provider/UserProvider";
import DisplayUserrComp from "../../Components/Users/DisplayUserrComp";

export default function Home() {
  const { users } = useContext(UserConntext);


    return (
      <div>

        <h2>TRAFIC BUS APP</h2>
        <Link to={"/login"}>login</Link>
        <DisplayUserrComp users={users} />

        
        
      </div>
    );
  }

