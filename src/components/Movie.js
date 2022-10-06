import React from 'react'

function Movie() {
  
 
return<>

  <div className="films-container">
  <img src={films.poster} alt={films.name} className="films-poster" />
  <div className="films-specs">
  <h2 className="films-name">{films.name}</h2>
  <p className="films-rating">{films.rating}</p>
  </div>
<p className="films-summary">{films.summary}</p>

</div>
  </>
  
}

export default Movie