import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../component/MainFeaturedPost';
import NavBar from '../component/NavBar';
import Coffee_table from '../picture/coffee_table.jpg';
import { Box } from '@material-ui/core';
import Grid from '@mui/material/Unstable_Grid2';

const theme = createTheme();

const mainFeaturedPost = {
    title: 'Plane Figure',
    description:
        "Want to know the distribution of the cafe? scroll down !",
    image: Coffee_table,
    imageText: 'main image description',
};

function Plane(){
    const { id } = useParams()
    const name = 'cafe name'
    const colors = new Array(24);
    for (let j = 0; j < colors.length; j++) {
        colors[j] = new Array(24);
        for(let i = 0;i < colors[j].length;i++)colors[j][i] = '#000000';
    }

    let arr = new Array(100);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(100);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = '#000000';
        }
    }

    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <NavBar id = {id} name = {name}></NavBar>
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                    </main>
                    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          1
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          2
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          3
        </Grid>
      </Grid>
    </Box>

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
                </Grid>
                </Container>
            </ThemeProvider>
            
        </>
    )
}

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