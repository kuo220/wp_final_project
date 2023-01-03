import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../component/MainFeaturedPost';
import NavBar from '../component/NavBar';
import Coffee_table from '../picture/coffee_table.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const mainFeaturedPost = {
    title: 'Plane Figure',
    description:
        "Want to know the distribution of the cafe? scroll down !",
    image: Coffee_table,
    imageText: 'main image description',
    linkText: "test linktext"
};

function Plane(){
    const { id } = useParams();
    const name = 'cafe name'
    const colors = new Array(24);
    for (let j = 0; j < colors.length; j++) {
        colors[j] = new Array(24);
        for(let i = 0;i < colors[j].length;i++)colors[j][i] = '#000000';
    }
    const testgraph = [colors,/*colors,colors,colors,colors,colors,colors,colors,colors,colors,colors,*/];
    const [maingraph, setMaingraph] = useState(colors);
    useEffect((maingraph)=>{console.log(maingraph)},[maingraph])
    const containerRef = useRef(null);
    const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
    const navigate = useNavigate();

    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg" ref={containerRef}>
                    <NavBar id = {id} name = {name}></NavBar>
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                    </main>
                    
                    <Grid container spacing={0} sx={{ width: `${containerWidth/3*2}px` , height:`${containerWidth/3*2}px` }}>
                        {console.log(maingraph)}
                        {
                        maingraph.map((block,i) => {
                            //console.log(block);
                            return block.map((item,j)=>{
                                return<Grid item key={[i, j].join('_')} xs={0.5}>
                                    <Box
                                        sx={{ width: `${containerWidth/36 - 1}px` , height:`${containerWidth/36-1}px` }}
                                        style={{ backgroundColor: item, outline: '0.05px solid white' }}
                                    />
                                </Grid>
                            })}
                            
                        )}
                    </Grid>
                    <br></br>
                    <Button variant="outlined" onClick={()=>{navigate('/search/cafe/:id/plane/create');}}>Create your own graph</Button>

                    <br></br>
                    <br></br>
                    <br></br>
                    
                </Container>
            </ThemeProvider>
               

            
        </>
    )
}

export default Plane
/*
                    <Grid container spacing={1} sx={{ width: `${containerWidth}px` , height:`${containerWidth}px` }}>
                        
                        {
                        testgraph.map((graph,k)=>{
                            return <Grid item key={k} xs={0.5}>
                                {graph.map((block,i) => {
                                    //console.log(block);
                                    return block.map((item,j)=>{
                                        return<Grid item key={[i, j].join('_')} xs={0.5}>
                                            <Box
                                                sx={{ width: `${containerWidth/180 - 1}px` , height:`${containerWidth/180-1}px` }}
                                                style={{ backgroundColor: item, outline: '0.05px solid white' }}
                                            />
                                        </Grid>
                                    })}
                                    
                                )}
                            </Grid>
                        })}
                        
                    </Grid>
*/ 

                /*<AppBar position="fixed" sx={{ bg: 'black', color: 'white',top: 'auto', bottom: 0 }}>
                        <Box sx={{ fontSize: 5, fontWeight: 'bold' }}>Title</Box>
                    </AppBar> */