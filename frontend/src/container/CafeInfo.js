import { useParams } from 'react-router-dom'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../component/MainFeaturedPost';
import NavBar from '../component/NavBar';
import InfoCard from '../component/InfoCard'
import AddCard from '../component/AddInfoCard';
import Coffee_cup_bean from '../picture/coffee_cup_bean.jpg'
import { GET_RESTAURANT_BY_ID_QUERY } from '../graphql/index';
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { useEffect } from 'react';

const mainFeaturedPost = {
    title: 'Basic Information',
    description:
        "View the information of this cafe, or add anything you want !",
    image: Coffee_cup_bean,
    imageText: 'main image description',
};

const featuredPosts = [
    {
        Name: 'name',
        information:
        'Information1',
    },
    {
        Name: 'name',
        information:
        'Information2',
    },
    {
        Name: 'name',
        information:
        'Information3',
    },
    
];

const theme = createTheme();

function CafeInfo() {
    const { id, name, userid } = useParams();
    const cafename = 'cafe name'


    const { data: getData, loading, error } = useQuery( GET_RESTAURANT_BY_ID_QUERY, {
        variables: {
            id: id
        },
    }); 

    useEffect( () => {
        //const informations = getData.GetRestaurantById.information;
    }, [])


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <NavBar id = {id} cafename = {cafename} name={name} userid={userid}></NavBar>
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <InfoCard name = {post.Name} information = {post.information} />
                        ))}
                        <AddCard/>
                    </Grid>
                </main>
                <div style={{height: '10vh'}}/>
            </Container>
        </ThemeProvider>
    );
}


export default CafeInfo;




