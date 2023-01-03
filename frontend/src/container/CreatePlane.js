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
import ButtonGroup from '@mui/material/ButtonGroup';

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

    let cnt = 1;
    const [maingraph, setMaingraph] = useState(colors);
    const [color, setColor] = useState(['#000000',0]);
    const containerRef = useRef(null);
    const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
    const navigate = useNavigate();

    useEffect((maingraph)=>{console.log('maingraph',maingraph)},[maingraph])

    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg" ref={containerRef}>
                    <NavBar id = {id} name = {name}></NavBar>
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                    </main>
                    Please try to draw according to the orientation of other maps!<br/>
                    Please select the item you want to draw:<br/>
                    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                        <Button onClick={(e)=>{setColor(['#F0F0F0',cnt]);}}>Floor</Button>
                        <Button onClick={(e)=>{setColor(['#F00000',cnt]);}}>Seat</Button>
                        <Button onClick={(e)=>{setColor(['#00F000',cnt]);}}>Socket</Button>
                        <Button onClick={(e)=>{setColor(['#0000F0',cnt]);}}>Toilet</Button>
                        <Button onClick={(e)=>{setColor(['#000000',cnt]);}}>Not Available(wall, counter......)</Button>
                    </ButtonGroup>
                    <br/>
                    <br/>
                    <Grid container spacing={0} sx={{ width: `${containerWidth/3*2}px` , height:`${containerWidth/3*2}px` }}>
                        {/*console.log(maingraph)*/}
                        {maingraph.map((block,i) => {
                            return (<>
                                {block.map((item,j) => {
                                    return (<Grid item key={[i, j].join('_')} xs={0.5}>
                                        <Box
                                            sx={{ width: `${containerWidth/36 - 1}px` , height:`${containerWidth/36-1}px` }}
                                            style={{ backgroundColor: item, outline: '0.05px solid white' }}
                                            onClick={()=>{
                                                console.log(i,j);
                                                let tmp = maingraph;
                                                tmp[i][j] = color[0];
                                                console.log('tmp',tmp)
                                                setMaingraph(tmp);
                                                console.log(color)
                                                setColor([color[0],cnt]);
                                                cnt = cnt +1;
                                            }}
                                        />
                                    </Grid>)
                                })}
                            </>)
                        })}
                    </Grid>
                    <br></br>
                    <Button variant="outlined" onClick={()=>{navigate('/search/cafe/:id/plane');}}>Finish drawing the map!</Button>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                </Container>
            </ThemeProvider>
               

            
        </>
    )
}
//<Button variant="outlined">Create your own </Button>
export default Plane

/*
{j == 23 ? <br/> : <></>}
{colors.map((color,index) => {
                    return <Grid item key={color}>
                    <Box
                        width={100}
                        height={100}
                        style={{ backgroundColor: color, border: '1px solid black' }}
                    >
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Box>
                    </Grid>
                })}
                    const colors = new Array(24);
    for (let j = 0; j < colors.length; j++) {
        colors[j] = '#ff0000';
    }*/
    /*
                        
                <Grid container spacing={0}>
                {colors.map((block,i) => {
                    return block.map((item,j)=>{
                        console.log(item,i,j)
                        return <Grid item key={item}>
                        <Box
                            width={100}
                            height={100}
                            style={{ backgroundColor: item, border: '1px solid white' }}
                        >
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Box>
                        
                        </Grid>
                    })
                })}
                </Grid>*/
                /*<AppBar position="fixed" sx={{ bg: 'black', color: 'white',top: 'auto', bottom: 0 }}>
                        <Box sx={{ fontSize: 5, fontWeight: 'bold' }}>Title</Box>
                    </AppBar> */