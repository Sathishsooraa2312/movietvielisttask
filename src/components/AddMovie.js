import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
export function AddMovie() {
  let [Name, setName] = useState("");
  let [Poster, setPoster] = useState("");
  let [Rating, setRating] = useState("");
  let [Summary, setSummary] = useState("");
  let [Trailer, setTrailer] = useState(" ");
  const navigate=useNavigate();
  const AddMovie = () => {
    const newMovie = {
      name: Name,
      poster: Poster,
      rating: Rating,
      summary: Summary,
      trailer:Trailer
    };
  fetch("https://624a7faa852fe6ebf887cc87.mockapi.io/movie",
    {   method:"POST",
        body:JSON.stringify(newMovie),
        headers: {"Content-Type": "application/json",}
  }) .then(()=>navigate("/movies"))
     .catch((err)=>console.log("Error Occured",err))
      
  };
 return <>
     <div  className="text-box"> 

<div  className="add-movie-form" >
      <TextField 
       label="Name"
        onChange={(event) => setName(event.target.value)}
        variant="outlined" />

      <TextField   
        label="Poster"
        onChange={(event) => setPoster(event.target.value)}
        variant="outlined" />

      <TextField  
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
        variant="outlined" />

      <TextField   label="Summary"
        onChange={(event) => setSummary(event.target.value)}
        variant="outlined" />

        <TextField  
         label="Trailer" 
        onChange={(event) => setTrailer(event.target.value)}
        variant="outlined" />
      <Button    onClick={AddMovie} variant="contained">
        Add Movie
      </Button>
      </div>
      {/* <p>{Name}-{Poster}-{Rating}-{Summary}</p> */}
    </div>
  </>;
}
