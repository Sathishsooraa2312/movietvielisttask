import React from 'react';
import { Movie } from './Movie';
import {useState,useEffect} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
export function MovieList() {

  const [films,setFilms]= useState([])
  const getMovies = () => {
    fetch("https://624a7faa852fe6ebf887cc87.mockapi.io/movie",
    {   method:"GET",
  })

    .then((data)=>data.json())
    .then((mvs)=>setFilms(mvs));
  };

  useEffect(()=>getMovies(),[]);

  const deleteMovie=(id)=>{
        fetch(`https://624a7faa852fe6ebf887cc87.mockapi.io/movie/${id}`,
        {
          method:"DELETE",
        }).then(()=>getMovies());
        
  }
  return <>
    <div className="films-list-container">
      {films.map((mv) => (
      <Movie  key={mv.id} 
      movie={mv} 
      id={mv.id} 
      deleteButton=
      {<IconButton onClick={()=>deleteMovie(mv.id)} color="error" aria-label="delete">
      <DeleteIcon />
    </IconButton>}
      />))}
    </div>
  </>;
}
