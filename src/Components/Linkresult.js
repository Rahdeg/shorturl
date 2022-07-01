import React from 'react'
import { useStateContext } from '../Context/Contextprovider';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useEffect } from 'react';
import axios from 'axios';


const Linkresult = () => {
    const {shortenlink,setshortenlink,copied,
        setcopied,inputvalue,loading,setloading,error,seterror}= useStateContext();


    useEffect(() => {
    const timer = setTimeout(() =>{
        setcopied(false);
    },1500);
    return ()=> clearTimeout(timer);
    }, [copied,setcopied]);
    
    const fetchData= async()=>{
        try {
            setloading(true);
            const res= await axios.post(`https://shorturl22.herokuapp.com/api/url/shorten`,{longUrl:inputvalue})
            setshortenlink(res.data.shortUrl);
        } catch (error) {
            seterror(error);
        }finally{
            setloading(false);
        }
    }

    useEffect(() => {
     if (inputvalue.length) {
       fetchData();
     }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputvalue])

    if (loading) {
      return <p className='white f1'>Loading...</p>  
    }

    if (error) {
        return <p className='white f1'>Something went wrong...</p>  
      }
    

  return (
    <>
    { shortenlink &&
        <div className='flex justify-center items-center pt4'>
        <p className='white ba3 outline pv3 ph4 bg-transparent' >{shortenlink}</p>
        <CopyToClipboard
        text ={shortenlink}
        onCopy={() =>setcopied(true)}
        >
        <button className='pa3 lh-copy ml3 br3 bg-orange pointer b--none white'>
        {copied ? 'link copied':'Copy link to Clipboard'} 
        </button>
        </CopyToClipboard>
        </div>
    }
    
    </>
    
  )
}

export default Linkresult