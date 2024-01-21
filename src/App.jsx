import { useState } from "react";
import Grid from "@mui/material/Grid";
import "./App.css";
import FabComponent from "./Components/Fab/Fab";

import { Data } from "./Helpers/data";
import Header from "./Components/Header/Header";
import CardComponent from "./Components/Card/Card";

function App() {
  const [data, setData] = useState(Data);
  const addNewData = () => {
    setData((prev) => [...prev, "abc"]);
  };
  return (
    <>
      <div className="app">
        <Header />
        <Grid
          container
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 20 }}
        >
          {data.map((d, id) => (
            <Grid item xs={2} sm={4} md={4} key={id}>
              <CardComponent key={id} text={d} />
            </Grid>
          ))}
        </Grid>
      </div>
      <FabComponent onClick={addNewData} />
    </>
  );
}

export default App;
