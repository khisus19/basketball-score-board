import React from "react";
import "../sass/_score.scss"

export default function Score() {
  const [homeScore, SetHomeScore] = React.useState(0);
  const [gestScore, SetGestScore] = React.useState(0);

  function handlePoints(points, team) {
    if(team === "home"){
      SetHomeScore(prevScore => prevScore + points);
    } else {
      SetGestScore(prevScore => prevScore + points);
    }
  }

  function resetScore() {
    SetHomeScore(0);
    SetGestScore(0);
  }

  return (
    <div className="board-container">
      <article>
        <h2>HOME</h2>
        <p>{homeScore}</p>
        <section>
          <button className="point-btn" onClick={()=>handlePoints(1, "home")}>+1</button>
          <button className="point-btn" onClick={()=>handlePoints(2, "home")}>+2</button>
          <button className="point-btn" onClick={()=>handlePoints(3, "home")}>+3</button>
        </section>
      </article>
      <article>
        <h2>GEST</h2>
        <p>{gestScore}</p>
        <section>
          <button className="point-btn" onClick={()=>handlePoints(1, "gest")}>+1</button>
          <button className="point-btn" onClick={()=>handlePoints(2, "gest")}>+2</button>
          <button className="point-btn" onClick={()=>handlePoints(3, "gest")}>+3</button>
        </section>
      </article>
      <button className="reset-btn" onClick={resetScore}>Reset</button>
    </div>
  )
}