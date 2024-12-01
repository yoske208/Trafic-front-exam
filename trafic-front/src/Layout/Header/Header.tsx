import { Link, NavLink, useNavigate } from "react-router-dom";
// import ProfileComp from "./Profile-heder/ProfileComp";
import { useContext } from "react";
import { UserConntext } from "../../Provider/UserProvider";
import useFatch from "../../Hooks/UseFetch";


const Header = () => {
  const { getFatch} = useFatch<any>('localhost:4000/users')
  const userContext = useContext(UserConntext)
  const navigate = useNavigate()
  return (
    <>
      <header>
        <h1>users app</h1>
        <div className="login_register">



        <button
        onClick={async ()=>{
          if(userContext?.users){
            await getFatch()
            userContext.setUser([])
          }
          else{
            navigate('/login')
          }
        }}
        >{userContext?.users ? 'logout': 'login'}</button>


        <button><Link to={"/addNewUser"}></Link>register</button>
        </div>
        

        <div className="navlink">
        <NavLink to={'/'} className='nav'>HOME</NavLink>
        {/* <NavLink to={'/users'} className='nav'>USERS</NavLink> */}
        <NavLink to={'/buses'} className='nav'>BUSES</NavLink>
        <NavLink to={'/lines'} className='nav'>LINES</NavLink>

         
        </div>
      </header>
    </>
  );
};

export default Header;
