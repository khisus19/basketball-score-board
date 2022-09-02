import React from "react";

export default function Score() {
  const [homeScore, SetHomeScore] = React.useState(0);
  const [awayScore, SetAwayScore] = React.useState(0);

  function handlePoints(points, team) {
    if(team === "home"){
      SetHomeScore(prevScore => prevScore + points);
    } else {
      SetAwayScore(prevScore => prevScore + points);
    }
  }

  function resetScore() {
    SetHomeScore(0);
    SetAwayScore(0);
  }

  return (
    <div>
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
        <h2>AWAY</h2>
        <p>{awayScore}</p>
        <section>
          <button className="point-btn" onClick={()=>handlePoints(1, "away")}>+1</button>
          <button className="point-btn" onClick={()=>handlePoints(2, "away")}>+2</button>
          <button className="point-btn" onClick={()=>handlePoints(3, "away")}>+3</button>
        </section>
      </article>
      <button className="reset-btn" onClick={resetScore}>Reset</button>
    </div>
  )
}