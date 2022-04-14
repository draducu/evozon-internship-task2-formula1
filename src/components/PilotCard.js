import React from "react";
import ReactCountryFlag from "react-country-flag";
import './PilotCard.css'

export default function PilotCard(props) {

  function addPoints(pilotNumber) {                  
    const newPilotList = props.pilotList.map((pilot) => {
      if (pilot.number === pilotNumber)
        return { ...pilot, points: pilot.points + 5 };
      return { ...pilot };
    });
    props.handleRender(newPilotList);
  }

  function subtractPoints(pilotNumber) {   
    const newPilotList = props.pilotList.map((pilot) => {
      if (pilot.number === props.pilot.number)
        return { ...pilot, points: pilot.points - 5 < 0 ? 0 : pilot.points - 5 };
      return { ...pilot };
    });
    props.handleRender(newPilotList);
  }

  return (
  <>
      <li className={"PilotCard"}>
        <img className={"image--logo"} src={props.pilot.image} alt='lala'/>
        <ReactCountryFlag
        countryCode={props.pilot.country}
        svg
          style={{
            width: "4em",
            height: "4em",
          }}
          title={props.pilot.country}
        />
        <p>{`${props.pilot.points} ${props.pilot.firstName} ${props.pilot.lastName}`}</p>
        <p>{`${props.pilot.team} `}</p>
        <button onClick={() => addPoints(props.pilot.number)} className="up">
        +
        </button>
        <button onClick={() => subtractPoints(props.pilot.number)} className="up">
        -
        </button>
      </li>
    
    </>
    
  );
}
