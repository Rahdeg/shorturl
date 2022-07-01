import {createContext,useContext,useState} from 'react';

const StateContext = createContext();


export const ContexProvider=({children})=>{
  const [shortenlink, setshortenlink] = useState('');
  const [copied, setcopied] = useState(false);
  const [inputvalue, setinputvalue] = useState('');
  const [value, setvalue] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);


    return(
        <StateContext.Provider
        value={{shortenlink,setshortenlink,copied,setcopied,inputvalue,
          setinputvalue,value, setvalue,loading,setloading,error,seterror}}
        >
        
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext =()=>useContext(StateContext);