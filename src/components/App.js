import './App.css';
import React from 'react'
import {useState} from 'react'
import { Routes, Route, Navigate,useNavigate } from "react-router-dom";
import { NotFound } from './NotFound';
import { Home } from './Home';
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './MovieDetails';
import { BasicForm } from './BasicForm';
import { EditMovies } from './EditMovies';
function App() {
  const [films]= useState([]);
  const navigate=useNavigate();
  const [mode ,setMode]=useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  //
  // useEffect(()=>{
  //   fetch("https://624a7faa852fe6ebf887cc87.mockapi.io/movie")
  //   .then((data)=>data.json())
  //   .then((mvs)=>setFilms(mvs));
  // },[]);
 
  return( 
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{minHeight : "100vh"}} elevation={4} >
  <div className='App'>
   
   <AppBar position="static">
        <Toolbar>
        <Button onClick={()=>navigate("/")}
         color="inherit">Home</Button>
        <Button  onClick={()=>navigate("/movies")}
        color="inherit">Movies</Button>
        <Button  onClick={()=>navigate("/addmovie")}
        color="inherit">Add Movies</Button>
        <Button  onClick={()=>navigate("/colorgame")}
        color="inherit">Colour game</Button>
        <Button  
        sx={{marginLeft:"auto"}}
        startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        onClick={()=>setMode( mode==="light"?"dark":"light")}
        color="inherit">{mode==="light"?"dark":"light"} Mode</Button>
        </Toolbar>
      </AppBar>

<section className='route-container'>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/films" element={<Navigate replace to="/films"/> } />
        <Route path="/movies" element={<MovieList data={films}/> } />
        <Route path="/movies/:id" element={<MovieDetails /> } />
        <Route path="/movies/edit/:id" element={<EditMovies /> } />
        <Route path="/basicform" element={<BasicForm /> } />
        <Route path="/addmovie" element={<AddMovie /> } />
        <Route path="/colorgame" element={<AddColor /> } />
        <Route path="*" element={<NotFound /> } />
        
      </Routes>
      </section>
      
</div>
</Paper>
</ThemeProvider>

  );
    }
export default App;

