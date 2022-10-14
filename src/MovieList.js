import React from 'react';
import { Movie } from './Movie';

export function MovieList({ data }) {

  return <>
    <div className="films-list-container">
      {data.map((n) => <Movie name={n} />)}
    </div>
  </>;
}
