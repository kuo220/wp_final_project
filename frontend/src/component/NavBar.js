import Header from './Header';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function NavBar({name, id}){
    const sections = [
        { title: 'About', url: `/search/cafe/${id}` },
        { title: 'Review', url: `/search/cafe/${id}/review` },
        { title: 'Comments', url: `/search/cafe/${id}/comments` },
        { title: 'Plane Figure', url: `/search/cafe/${id}/plane` },
        
    ];

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Container maxWidth="lg">
                    <Header title={name} sections={sections}></Header>
                </Container>
        </ThemeProvider>
    )
}

export default NavBar;

