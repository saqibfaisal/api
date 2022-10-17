import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Data() {
  let [data, setData] = useState([]);
  let Navigate = useNavigate()
  let Dataget = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b333dafca0ce4147951aac41a6c09a52"
      )
      .then((succ) => {
        // console.log(succ);
        setData(succ.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Dataget();
    // console.log(Data)
  }, []);
  let Detail = (e) => {
    Navigate("/details",{
        state:{
            item:{e},
        },
    })
    // console.log(state.item)
  };
  let location = useLocation();
console.log(location.state)
  return (
    <div>
      <header className="App-header">
        <Box sx={{ p: 5 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ p: 3, color: "crimson" }}
          >
            Breaking News
          </Typography>
          <Box sx={{ p: 6 }}>
            <Grid container rowSpacing={3}>
              {data.map((e,i) => (
                <Grid key={i} item md={3} onClick={() => Detail(e)} >
                  <Box
                    sx={{
                      border: "1px solid white",
                      p: 2,
                      width: "75%",
                      height: "80%",
                      cursor:"pointer"
                    }}
                  >
                    <Typography>{e.title}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </header>
    </div>
  );
}
export default Data;