// import React from 'react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Summary = (currele) => {
    const {id}=useParams();

    const [users,Setuser]=useState([]);

    const getData = async ()=>{
        const Data= await fetch(`https://api.tvmaze.com/search/shows?q=${id}`);
        const data=await Data.json();
        Setuser(data);
        console.log(data);
    }
    useEffect(()=>{
        getData();
    },[]);
  
  return (
      <>
      
        this if th page of summary
       <h1>{id}{}</h1>
       {/* {users.name} */}
      
        
      </>
  )
}

export default Summary