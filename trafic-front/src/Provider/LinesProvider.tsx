import React, { createContext, useState } from 'react'
import {ILine} from "../Interface/Interface"
const url = "http://localhost:4000/lines";


export interface Props {
    children: React.ReactNode;
  }
  
  export interface LineProps {
    line: ILine | null;
    setLine: React.Dispatch<React.SetStateAction<ILine | null>>;
  }

  export const LineConntext = createContext<LineProps| null>(null);



const LinesProvider = ({children}:Props) => {
    const [line,setLine] = useState<ILine|null>(null)
  return (
    <div>
        <LineConntext.Provider value={{line,setLine}}>
            {children}
        </LineConntext.Provider>
    </div>
  )
}

export default LinesProvider