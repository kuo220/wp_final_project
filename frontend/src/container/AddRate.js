import { useParams } from 'react-router-dom'
import ScoreIndicator from '../component/ScoreIndicator'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MainFeaturedPost from '../component/MainFeaturedPost';
import Coffee_cup from '../picture/coffee_cup.jpg'
import AddRateCard from '../component/AddRateCard'
import AddTFRateCard from '../component/AddTFRateCard';
import AddRateHeader from '../component/AddRateHeader';
import AddNewRateButtonCard from '../component/AddNewRateButtonCard'
import AddNewTFRateButtonCard from '../component/AddNewTFRateButtonCard'
import { useEffect } from 'react';

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
        
    },
    {
      title: 'name',
      
    },
    {
      title: 'name',
      
    },
    {
      title: 'name',
      
    },
    
];

const TFscores = [
    {
        title: 'name',
        score: 'T'
    },
    {
      title: 'name',
      score: "F"
    },
    {
      title: 'name',
      score: "F"
    },
    {
      title: 'name',
      score: "T"
    },
    
];

function AddRate(){
    const { id, name, userid } = useParams();
    const cafename = 'cafe name'

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg" style = {{backgroundColor: '#FCF3E3'}}>
                    <AddRateHeader/>
                    {/* <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                    </main> */}
                    <div style={{height: '10vh'}}/>
                    {scores.map((card) => (
                        <>
                            <AddRateCard title={card.title}/>
                            <div style={{height: '3vh'}}/>
                        </>
                    ))}
                    <AddNewRateButtonCard/>
                    <div style={{height: '15vh'}}/>
                    {TFscores.map((card) => (
                        <>
                            <AddTFRateCard title = {card.title} TF = {card.score}/>
                            <div style={{height: '3vh'}}/>
                        </>
                    ))}
                    <AddNewTFRateButtonCard/>
                    <div style={{height: '10vh'}}/>
                </Container>
            </ThemeProvider>
            
        </>
    )
}

export default AddRate