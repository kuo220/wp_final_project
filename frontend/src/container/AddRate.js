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
import { useEffect, useState } from 'react';
import { GET_RESTAURANT_BY_ID_QUERY } from '../graphql/index';
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { Button } from '@mui/material';

const finishStyles = {
    position: 'relative',
    left: '90%'
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
    const [rates, setRates] = useState([]);
    const [TFrates, setTFRates] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { data: getRestaurantData, loading: getRestaurantLoading, error } = useQuery( GET_RESTAURANT_BY_ID_QUERY, {
        variables: {
            id: id
        },
    }); 

    useEffect((RestaurantLoading)=>{
        if(getRestaurantData?.GetRestaurantById !== undefined){
            setRates(getRestaurantData?.GetRestaurantById?.sprate);
            setTFRates(getRestaurantData?.GetRestaurantById?.spTFrate);
        }
    },[getRestaurantLoading])

    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg" style = {{backgroundColor: '#FCF3E3'}}>
                    <AddRateHeader/>
                    <div style={{height: '10vh'}}/>
                    {scores.map((card) => ( //! comment
                        <>
                            <AddRateCard title={card.title}/>
                            <div style={{height: '3vh'}}/>
                        </>
                    ))}
                    {/* {rates.map((card) => ( 
                        <>
                            <AddRateCard title={card.name}/>
                            <div style={{height: '3vh'}}/>
                        </>
                    ))} */}
                    <AddNewRateButtonCard/>
                    <div style={{height: '15vh'}}/>
                    {TFscores.map((card) => ( //! comment
                        <>
                            <AddTFRateCard title = {card.title} TF = {card.score}/>
                            <div style={{height: '3vh'}}/>
                        </>
                    ))}
                    {/* {TFrates.map((card) => ( 
                        <>
                            <AddTFRateCard title = {card.name} Tnum = {card.Tnum.length} Fnum = {card.Fnum.length}/>
                            <div style={{height: '3vh'}}/>
                        </>
                    ))}  */}
                    <AddNewTFRateButtonCard/>
                    <div style={{height: '10vh'}}/>
                    <div style={finishStyles}>
                        <Button size='large' variant='contained'>Finish</Button>
                    </div>
                    <div style={{height: '5vh'}}/>
                </Container>
            </ThemeProvider>
            
        </>
    )
}

export default AddRate