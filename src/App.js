import React, { useEffect } from "react";
import BestCard from "./components/BestCard";
import PilotList from "./components/PilotList";
import mockData from "./mockData";
import "./components/PilotCard.css";

function Sorting(pilotList) {
  // sortare piloti

  const pilotListCopy = [...pilotList]; // nu trebuie sa modifc variabile exterioare, lucrez pe copie
  pilotListCopy.sort((pilotA, pilotB) => {
    return pilotB.points - pilotA.points;
  });
  return pilotListCopy;
}

function App() {
  const [pilotList, setPilotList] = React.useState(Sorting(mockData));
  const [bestTeam, setBestTeam] = React.useState(null); //********** */
  function renderPilotList(newPilotList) {
    // render me again
    setPilotList(Sorting(newPilotList));
  }

  const findBestTeam = () => {
    const myTeams = [];
    pilotList.forEach((pilot) => {
      // console.log(pilot)
      if (!myTeams.includes(pilot.team)) {
        myTeams.push(pilot.team);
      }
      return myTeams;
    });

    let myTeamsAndTheirPoints = []; // trebuie sa fie plina de obiecte care fiecare un team si un sumPoints

    myTeams.forEach((team, index) => {
      let objTemplateTEAMandTotalPOINTS = {
        name: null,
        points: null,
      };

      objTemplateTEAMandTotalPOINTS.name = team;
      let ArrayOfPointsForEachTeam = [];
      for (let i = 0; i < pilotList.length; i++) {
        if (team === pilotList[i].team) {
          console.log(team + " " + pilotList[i].points);
          ArrayOfPointsForEachTeam.push(pilotList[i].points);
        }
      } // end for !!! watchout !!!
      console.log(ArrayOfPointsForEachTeam);
      let sumOfPointsPerTeam = ArrayOfPointsForEachTeam.reduce(
        // fac suma pe echipa
        (previousValue, currentValue) => previousValue + currentValue,
        0
      );
      objTemplateTEAMandTotalPOINTS.points = sumOfPointsPerTeam;
      myTeamsAndTheirPoints.push(objTemplateTEAMandTotalPOINTS);
      console.log(myTeamsAndTheirPoints);
    });

    console.log(myTeams);

    return myTeamsAndTheirPoints[0].name;
  };

  console.log(bestTeam + ' is the best of the best')
  
  
  useEffect(() => {
    setBestTeam(findBestTeam());
  }, [pilotList]); // when it changes DO

  return (
    <>
      <PilotList
        pilotList={pilotList} // e obiect ii trebuie paranteze
        handleRender={renderPilotList} // functie, fara paranteze inauntru ca se executa singura la rulare
      />
      { bestTeam && <BestCard bestTeam={bestTeam} /> }
      {/* <BestCard pilotListForBest={pilotList} /> */}
    </>
  );
}

export default App;
