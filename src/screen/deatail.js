import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom"

function Detail() {
    let location = useLocation();
    let data = location.state.item.e
    // console.log(data) 
    return(
        <div>
            <header className="App-header">
                <Box sx={{ p: 15 ,}}>
                    <Box  sx={{ border: "1px solid white", p: 2}}>
                        <Typography align="center" variant="h5">{data.title}</Typography>
                        <Typography align="right" variant="body2">Published:  {data.publishedAt}</Typography>
                        <Typography align="center" variant="body1" mt={4}>{data.description}</Typography>
                        <Typography align="center" mt={2}>{data.content}</Typography>
                        <Typography align="center" mt={2}>Author: {data.author}</Typography>
                        <Typography align="center"mt={2}>Source: {data.source.name}</Typography>
                    </Box>
                </Box>
            </header>
        </div>
    )
}
export default Detail


// import { Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react'
// import { useLocation } from 'react-router-dom';
// import '../App.css'
// function Details() {
//     let location = useLocation();
//     let data = location.state.item.e;
//     console.log(data)
//     return (
//         <div>
//             <header className='App-header '>
//                 <Box sx={{ p: 15 }}>
//                     <Box sx={{ border: "1px solid white", p: 2 }}>
//                         <Typography align='center' variant='h4'>{data.title}</Typography>
//                         <Typography align='right'>PublishedAt: {data.publishedAt}</Typography>
//                         <hr/>
//                         <Typography variant='body1' >{data.description}</Typography>
//                         <Typography>{data.content}</Typography>
//                         <Typography align='right'>Author: {data.author}</Typography>
//                         <Typography align='right'>Source: {data.source.name}</Typography>
//                     </Box>
//                 </Box>

//             </header>
//         </div>
//     )
// }

// export default Details