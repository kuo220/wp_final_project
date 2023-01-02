import { useParams } from 'react-router-dom'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../component/MainFeaturedPost';
import NavBar from '../component/NavBar';
import InfoCard from '../component/InfoCard'

const mainFeaturedPost = {
    title: 'Basic Information',
    description:
        "View the information of this cafe, or add anything you want!",
    image: 'https://source.unsplash.com/random',
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
];

const theme = createTheme();

function CafeInfo() {
    const { id } = useParams();
    const name = 'cafe name'

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <NavBar id = {id} name = {name}></NavBar>
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <InfoCard name = {post.Name} information = {post.information} />
                        ))}
                    </Grid>
                </main>
            </Container>
        </ThemeProvider>
    );
}


export default CafeInfo;




