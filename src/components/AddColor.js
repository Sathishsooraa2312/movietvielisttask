import React from 'react';
import { useState } from 'react';
import { Colorbox } from './Colorbox';
import CardContent from '@mui/material/CardContent';
import { Card } from '@mui/material';
export function AddColor() {

  const [Colorlist, setColorlist] = useState(["orange", "red", "yellow", "green", "skyblue"]);
  let [color, setColor] = useState("");
  const styles = {
    backgroundColor: color
  };
  return <>
  <Card>
<CardContent className="color-movie-form">
    <input type="text"
      style={styles}
      placeholder="name"
      onChange={(event) => setColor(event.target.value)} />
    <button onClick={() => setColorlist([...Colorlist, color])}>Add Color</button>
    <h1>color:{color}</h1>

    {Colorlist.map((clr) => (<Colorbox a={clr} />))}
  </CardContent>
  </Card>
  </>;
}
