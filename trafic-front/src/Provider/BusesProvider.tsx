import React, { createContext, useState } from 'react'
import {IBus} from "../Interface/Interface"
const url = "http://localhost:4000/buses";


export interface Props {
    children: React.ReactNode;
  }
  
  export interface BusProps {
    bus: IBus | null;
    setBus: React.Dispatch<React.SetStateAction<IBus | null>>;
  }

  export const BusConntext = createContext<BusProps| null>(null);


const BusesProvider = ({children}:Props) => {
    const [bus, setBus] = useState<IBus|null>(null);

  return (
    <div>
        <BusConntext.Provider value={{bus,setBus}} >
            {children}

        </BusConntext.Provider>
        
    </div>
  )
}

export default BusesProvider