import { Typography } from 'antd';
import Titlebar from './Titlebar';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';

const HomeBackground = styled.div`
	width : 100vw;
	height : 100vh;
	background-color : #F5DEB3;
`

function Home() {
	return(
        <HomeBackground>
            <CssBaseline/>
            <Titlebar/>
            <Typography.Title
                italic
            >
                Café Finder
            </Typography.Title>
        </HomeBackground>
    )
}

export default Home;