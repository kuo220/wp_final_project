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
import {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

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
    right : 12%
`
const LogoutButton = styled(Button)`
	position : absolute;
	top : 2.5%;
	right : 5%
`


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function Search() {
	const navigate = useNavigate();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar style={{backgroundColor:"#8A5A00", height:'15vh'}}>
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

				<AddButton type='default'
					onClick={() => {
						navigate('/addcafe')
					}}
				>
					Add Café<PlusOutlined/>
				</AddButton>

				<LogoutButton type='default'
					onClick={() => { navigate('/') }}
				>
					{/* <LogoutOutlined /> */}
					Log Out
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
		</ThemeProvider>
	);
}

export default Search;