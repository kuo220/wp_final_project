import { Typography } from 'antd';
import Titlebar from './Titlebar';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import home from '../picture/home.jpg'

const HomeBackground = styled.div`
	width : 100vw;
	height : 100vh;
	background-color : #F5DEB3;
`

function Home() {
	return(
        
        <HomeBackground>
            <CssBaseline/>
            <img src={home} style={{width:'100%', height:'100%'}}/>
        </HomeBackground>
    )
}

export default Home;