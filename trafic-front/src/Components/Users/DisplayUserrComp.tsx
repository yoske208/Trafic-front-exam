import React from 'react'
import { IUser } from '../../Interface/Interface';
import { Link } from 'react-router-dom';

interface Props {
    users: IUser[];
  }
  

const DisplayUserrComp = ({users}:Props) => {
    if(users){

    
    


  return (
    <>
    <div className="card-list">
          {users.map((user) => (
            <div key={user._id} className="card">
              <div>
               
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <h3>{user.role}</h3>

               
                <button
                  style={{
                    padding: "10px",
                    background: "#db9f70",
                    color: "black",
                  }}
                  >
                  <Link to={`/Puzzle/${user._id}`}>Open The Puzzle</Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        
    </>
  )
}
}

export default DisplayUserrComp