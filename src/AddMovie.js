import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ data, setFilms }) {
  let [Name, setName] = useState("");
  let [Poster, setPoster] = useState("");
  let [Rating, setRating] = useState("");
  let [Summary, setSummary] = useState("");
  
  const AddMovie = () => {
    const newMovie = {
      name: Name,
      poster: Poster,
      rating: Rating,
      summary: Summary,
    };
    setFilms([...data, newMovie]);
  };
  return <>
     <div  className="text-box"> 

<div  className="add-movie-form" >
      <TextField className="text-12" label="Name"
        onChange={(event) => setName(event.target.value)}
        variant="outlined" />

      <TextField   className="text-12"
        label="Poster"
        onChange={(event) => setPoster(event.target.value)}
        variant="outlined" />

      <TextField   className="text-12"
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
        variant="outlined" />

      <TextField   label="Summary" className="text-12"
        onChange={(event) => setSummary(event.target.value)}
        variant="outlined" />
      <Button    onClick={AddMovie} variant="contained">
        Add Movie
      </Button>
      </div>
      {/* <p>{Name}-{Poster}-{Rating}-{Summary}</p> */}
    </div>
  </>;
}
