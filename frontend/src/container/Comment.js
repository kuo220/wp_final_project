import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../component/MainFeaturedPost';
import Comment_component from '../component/Comment_component';
import NavBar from '../component/NavBar';
import Coffee_cup_half from '../picture/coffee_cup_half.jpg';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const theme = createTheme();

const mainFeaturedPost = {
    title: 'Comments',
    description:
        "See what everyone thinks about the cafe, give us some thoughts yourself !",
    image: Coffee_cup_half,
    imageText: 'main image description',
};

function Comments(){
    const { id, name, userid } = useParams()
    const cafename = 'cafe name'
    const [rate, setRate] = useState(null);
    const [text, setText] = useState('');

    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <NavBar id = {id} cafename = {cafename} name={name} userid={userid}></NavBar>
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                    </main>
                </Container>
                <Container maxWidth="lg">
                    {/*<Typography component="legend">Leave a comment about the cafe!</Typography>*/}
                    <Rating name="no-value" value={rate} onChange={(e)=>{setRate(e.target.value);}} sx={{ padding:1 }}/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="What is your opinion for this Cafe?"
                        multiline
                        fullWidth 
                        rows={4}
                        sx={{ padding:1 }}
                        onChange={(e)=>{setText(e.target.value)}}
                    />
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained">Summit</Button>
                    </Box>
                </Container>
                <br/>
                <Container maxWidth="lg">
                    <Typography variant="h5">
                        Average Star: 3.33
                        <Rating name="read-only" value={3.33} precision={0.1} readOnly sx={{padding:1}}/>
                    </Typography>
                </Container>
                <Container maxWidth="lg">
                    <Comment_component name="testname" body="The coffee is fine with a relatively low price. However, the service is awful." star="3" time="testtime"/>
                </Container>
            </ThemeProvider>
            
        </>
    )
}

export default Comments

/*
                <Col xs="6">
                    <Form>
                        <FormGroup row>
                        <Label for="title" sm={2}>
                            Title
                        </Label>
                        <Col sm={10}>
                            <Input
                            name="title"
                            value={formTitle}
                            id="title"
                            placeholder="Post title..."
                            onChange={(e) => setFormTitle(e.target.value)}
                            />
                        </Col>
                        </FormGroup>
                        <FormGroup>
                        <Label for="body">Body</Label>
                        <Input
                            type="textarea"
                            name="body"
                            value={formBody}
                            id="body"
                            placeholder="Post body..."
                            onChange={(e) => setFormBody(e.target.value)}
                        />
                        </FormGroup>
                        <Button
                        type="submit"
                        color="primary"
                        disabled={formTitle === '' || formBody === ''}
                        >
                            Post!
                        </Button>
                    </Form>
                </Col>
*/