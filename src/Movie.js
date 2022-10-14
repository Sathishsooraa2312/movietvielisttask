import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';

 export function Movie({ name }) {

  let [toggle, setToggle] = useState(false);
  let changes = {
    color: name.rating >= 8.5 ? "green" : "red"
  };
  return <>

    <card className="films-container">
      <img src={name.poster} alt={name.name} className="films-poster" />
      <CardContent><div className="films-specs">
        <h2 className="films-name">{name.name}
          <IconButton color="primary"
           onClick={() => setToggle(!toggle)} aria-label="toggle-summary">
            {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton color="primary" 
          onClick={() => setToggle(!toggle)} aria-label="Movie-details">
           <InfoIcon /> 
          </IconButton>
          
          
          
          </h2>

        <p style={changes} className="films-rating">{name.rating}🌟 </p>
      </div>


        {toggle ? null : <p className="films-summary">{name.summary}</p>}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>

    </card>
  </>;
}
