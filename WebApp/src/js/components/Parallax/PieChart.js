require("../../../stylesheets/_all.scss");
import React, {useState} from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import CalculationPlanProgress from "../Plan/CalculationPlanProgress";

// Dein Fortschritt von dem 30 Tage Plan von 100%
function PieChart() {

  const [state, setState] = useState(
    {
      dataPie: {
        labels: ["Erledigt", "Noch zu erledigen"],
        datasets: [
          {
            data: [CalculationPlanProgress(), (100-CalculationPlanProgress())],
            backgroundColor: [
              "#FDB45C",
              "#F7464A"
            ],
            hoverBackgroundColor: [
              "#FFC870",
              "#FF5A5E"
            ]
          }
        ]
      }
    }
  );

  return (
    <MDBContainer>
      <h3 className="mt-5">Dein Fortschritt des Plans in %</h3>
      <Pie data={state.dataPie} options={{ responsive: true }} />
    </MDBContainer>
  );
}

export default PieChart;