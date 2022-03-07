import axios from 'axios';
import React, { useEffect, useState } from 'react'


const initstate = {
    query: "",
    data: []
}

export const Weatherinfo = () => {

    const [state, setState] =useState(initstate);
    const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
       console.log(e.target.value);
       setState({...state, query:e.target.value});
   }
  useEffect(() => {
    handleSearch()
  }, [])



   const handleSearch = () => {

    setLoading(true);

     axios({
       method:"get",
       baseURL: "http://api.weatherapi.com/v1",
       url: "/current.json",
       params: {
         key: "d97d9935e7254552bdc92528220403",
         q:state.query || "pune"
       }
     })
     .then(res => setState({...state,data:res.data}))
     .catch(err => console.log(err))
     .finally(() => setLoading(false))
   } 
console.log("state", state.data)


  return (
    <div>
    
    <h1>Weather information for all World</h1>
    
     <input type="text" placeholder='Enter city name' 
     value={state.query}
     onChange={handleChange} />
     
     <button onClick={handleSearch}>Search</button>
     {loading && <h1>Loading... </h1>}
     
{state?.data.location}
<h2>{state.data?.location?.name}</h2>
{state?.data?.current && <>
<h5>{state?.data?.current?.condition?.text}</h5>

  <img src= {state?.data?.current?.icon} alt = "wetaher icon" />
   </>
  } 

    </div>
  )
}
