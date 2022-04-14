import React from "react";
import PilotCard from "./PilotCard.js";

export default function PilotList(props) {

  // function addPoints(pilotNumber) {                  
  //   const newPilotList = props.pilotList.map((pilot) => {
  //     if (pilot.number === pilotNumber)
  //       return { ...pilot, points: pilot.points + 5 };
  //     return { ...pilot };
  //   });
  //   props.handleRender(newPilotList);
  // }

  // function subtractPoints(pilotNumber) {   
  //   const newPilotList = props.pilotList.map((pilot) => {
  //     if (pilot.number === pilotNumber)
  //       return { ...pilot, points: pilot.points - 5 };
  //     return { ...pilot };
  //   });
  //   console.log(newPilotList) 
  //   props.handleRender(newPilotList);
  // }

  return (
    <ul style={{ listStyle: "none" }}>
      {props.pilotList.map((pilot) => {
        return (
          <PilotCard
            handleRender={props.handleRender}
            pilotList={props.pilotList}
            className={"PilotCard"}
            key={pilot.number}
            pilot={pilot}
            // keyAddPoints={addPoints}
            // keySubtractPoints={subtractPoints}
          />
        );
      })}
    </ul>
  );
}
