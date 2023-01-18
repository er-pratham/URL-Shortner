import React ,{useState}from 'react';
import './MainContainer.css';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import axios from "axios";
export default function MainContainer() {
  const [inputData,setInputData]=useState("");
  const [shortLink,setShortLink]=useState("");
  const [warn,setWarn]=useState("");
  const handleChange=(event)=>{
    setInputData(event.target.value);
  }
  // Function For Check a string consist only space?
  const validstring=()=>{
    let space=0;
    for(let i=0;i<inputData.length;i++)
    {
      if(inputData[i]===" ")
      {
        space++;
      }
    }
    if(space>=inputData.length)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  // Click Button Function
  const clickbutton=()=>{
      if(inputData==="" || validstring())
      {
      setWarn("Link is Empty!");
      }  
    else{
       getURL();
        }
    }
    // API Call Function
  const getURL=async()=>{
    const res=await axios.get(`https://api.shrtco.de/v2/shorten?url=${inputData}`);
      if(res.status===201)
      {
        setShortLink(res.data.result.short_link);
        setWarn("");
      }
  }
    return (
    <div className='MainContainer'>
        <h3>Paste your URL to be shortened</h3>
        <input type="url" onChange={handleChange} name="" value={inputData} id="" required placeholder='Paste Your Link'/>            
        <div className="button">
            <Tooltip title="Short URL">
            <Button onClick={clickbutton}>Shorten URL</Button>
            </Tooltip>
            <Tooltip title="Copy URL">
            <Button onClick={()=>{
              navigator.clipboard.writeText(shortLink);
            }}>Copy To Clipboard</Button>
            </Tooltip>
            </div>
            <div className="displaymessage">
              <span className='warn'>{warn}</span>
              <Tooltip title="Click To Go"><span className='shortedLink'><a href={`https://${shortLink}`} rel="noreferrer" target="_blank">{shortLink}</a></span></Tooltip>
              </div>
        <p className='datamsg'>URL Shortner is a free tool to shorten a URL or reduce a link
            Use our URL Shortener to create a shortened link making it easy to remember</p>
    </div>
  )
}
