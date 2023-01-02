import * as React from 'react';
import styled from 'styled-components'
import { Input, Button } from 'antd';
import { ShopOutlined, PlusOutlined, LogoutOutlined } from "@ant-design/icons";
import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {useHooks} from './hooks/Hooks'


const SearchBox = styled(Input.Search)`
	position : absolute;
	display : flex;
	width : 50%;
	top : 25%;
	left : 25%;
	right : 25%;
`
const AddButton = styled(Button)`
	position : absolute;
    // background : #8A5A00;
    top : 2.5%;
    right : 10%
`
const LogoutButton = styled(Button)`
	position : absolute;
	top : 2.5%;
	right : 5%
`

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
			Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function Search() {
	const navigate = useNavigate();
	const {login, setLogin} = useHooks();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="relative">
			<Toolbar style={{backgroundColor:"#8A5A00"}}>
				<LocalCafeIcon sx={{ mr: 2 }} />
				<Typography variant="h6" color="inherit" noWrap>
					Café Finder
				</Typography>
				</Toolbar>
			</AppBar>
			<main>
			{/* Hero unit */}
			<Box
			sx={{
				bgcolor: 'background.paper',
				pt: 8,
				pb: 6,
			}}
			>
				<Container maxWidth="sm">

				<SearchBox
					size="large"
					placeholder="Search for café"
					prefix={<ShopOutlined />}
				/>

				<AddButton type='default'>
					<PlusOutlined/>
				</AddButton>

				<LogoutButton type='default'
					onClick={() => {
						setLogin(false);
						navigate('/')
					}}
				>
					<LogoutOutlined />
				</LogoutButton>
				
				<Stack
					sx={{ pt: 4 }}
					direction="row"
					spacing={2}
					justifyContent="center"
				>

				</Stack>
				</Container>
			</Box>
			<Container sx={{ py: 8 }} maxWidth="md">
			{/* End hero unit */}
				<Grid container spacing={4}>
				{cards.map((card) => (
					<Grid item key={card} xs={12} sm={6} md={4}>
					<Card
					sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
					>
						<CardMedia
							component="img"
							sx={{
							// 16:9
							pt: '56.25%',
							}}
							image="https://source.unsplash.com/random"
							alt="random"
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography gutterBottom variant="h5" component="h2">
								Heading
							</Typography>
							<Typography>
								This is a media card. You can use this section to describe the
								content.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">View</Button>
							<Button size="small">Edit</Button>
						</CardActions>
					</Card>
				</Grid>
				))}
				</Grid>
			</Container>
			</main>
			{/* Footer */}
			{/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
				Something here to give the footer a purpose!
				</Typography>
			<Copyright />
			</Box> */}
			{/* End footer */}
		</ThemeProvider>
	);
}

export default Search;