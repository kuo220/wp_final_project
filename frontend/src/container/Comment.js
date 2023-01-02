import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../component/MainFeaturedPost';
import NavBar from '../component/NavBar';
import Coffee_cup_half from '../picture/coffee_cup_half.jpg'

const theme = createTheme();

const mainFeaturedPost = {
    title: 'Comments',
    description:
        "See what everyone thinks about the cafe, give us some thoughts yourself !",
    image: Coffee_cup_half,
    imageText: 'main image description',
};

function Comments(){
    const { id } = useParams()
    const name = 'cafe name'

    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <NavBar id = {id} name = {name}></NavBar>
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                    </main>
                </Container>
            </ThemeProvider>
            
        </>
    )
}

export default Comments