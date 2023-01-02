import { useParams } from 'react-router-dom'
import ScoreIndicator from '../component/ScoreIndicator'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MainFeaturedPost from '../component/MainFeaturedPost';
import NavBar from '../component/NavBar';
import Coffee_cup from '../picture/coffee_cup.jpg'
import RateCard from '../component/RateCard'

const ScoreStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
};

const theme = createTheme();

const mainFeaturedPost = {
    title: 'Review',
    description:
        "View the review score of this cafe, or rate it yourself!",
    image: Coffee_cup,
    imageText: 'main image description',
};

const scores = [
    {
        title: 'name',
        score: 4.3
    },
    {
      title: 'name',
      score: 5
    },
    {
      title: 'name',
      score: 1.5
    },
    {
      title: 'name',
      score: 3.5
    },
    
];

function ReviewScore(){
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
                    <div style = {ScoreStyles}><ScoreIndicator value={0} maxValue = {5}></ScoreIndicator></div>
                    {scores.map((card) => (
                        <>
                            <RateCard title={card.title} score = {card.score}/>
                            <div style={{height: '3vh'}}/>
                        </>
                    ))}
                    <div style={{height: '10vh'}}/>
                </Container>
            </ThemeProvider>
            
        </>
    )
}

export default ReviewScore