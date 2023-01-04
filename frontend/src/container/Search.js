import React, {Component} from 'react';
import {ScrollView, ImageBackground} from "react-native";
import styled from 'styled-components'
import { Input} from 'antd';
import { ShopOutlined, PlusOutlined, LogoutOutlined } from "@ant-design/icons";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SearchIcon from '@mui/icons-material/Search';
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
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../component/SearchInput';
import search1 from '../picture/search1.jpg'
import search2 from '../picture/search2.jpg'
import search3 from '../picture/search3.jpg'


// const SearchBox = styled(Input)`
// 	position : absolute;
// 	display : flex;
// 	width : 52%;
// 	height : 8%;
// 	top : 25%;
// 	left : 22%;
// 	right : 25%;
// `

// const CssTextField = styled(TextField)({
// 	'& label.Mui-focused': {
// 		color: '#DB8F00',
// 	},
// 	'& .MuiInput-underline:after': {
// 		borderBottomColor: '#DB8F00',
// 	},
// 	'& .MuiOutlinedInput-root': {
// 		'& fieldset': {
// 			borderColor: '#FFCF78',
// 		},
// 		'&:hover fieldset': {
// 			borderColor: '#DB8F00',
// 		},
// 		'&.Mui-focused fieldset': {
// 			borderColor: '#DB8F00',
// 		},
// 	},
// });

// const SearchBox = {
// 	position : 'absolute',
// 	width : '52%',
// 	height : '8%',
// 	top : '25%',
// 	left : '22%',
// 	right : '25%',
// }

const SearchButton = {
	position : 'absolute',
	backgroundColor : '#DB8F00',
	color : 'white',
	height : '8%',
	top : '25%',
	right : '21.3%',

}

const AddButton = {
	position : 'absolute',
    top : '5%',
    right : '15%',
	backgroundColor:'#DB8F00'
}

const LogoutButton = {
	position : 'absolute',
	top : '5%',
	right : '5%',
	backgroundColor:'#DB8F00',
}




const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function Search() {
	const navigate = useNavigate();


	return (
		
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>
			{/* <ImageBackground
				style={{
					// height: 1000,
					flex:'1',
					width: '100%',
				}}
				source={require('../picture/search3.jpg')}
			> */}
			
			{/* <img src={search3} width='100%' height='100%'/> */}
			<AppBar position="relative" style={{backgroundColor:'white'}}>
			
				<Toolbar style={{backgroundColor:"#FFD78C", height:'15vh'}}>
					<LocalCafeIcon sx={{ mr: 2 }} />
					<Typography variant="h4" color="inherit" noWrap>
						Café Finder
					</Typography>
				</Toolbar>
				
			</AppBar>
			
			{/* <img src={search1} width='100%' height='100%' style={{opacity:'0.85'}}/> */}
			<Box
			sx={{
				bgcolor: 'background.paper',
				pt: 8,
				pb: 6,
			}}
			>
				<Container maxWidth="sm">
					<Stack
						sx={{ pt: 4 }}
						direction="row"
						spacing={2}
						justifyContent="center"
					>

					</Stack>
					</Container>
			</Box>

			<SearchInput/>

			<Button variant="contained" size='large'
				style={AddButton}
				onClick={() => {navigate('/addcafe')}}
			>
				Add Café
			</Button>
			
			
			<Button variant="contained" size='large' 
				style={LogoutButton}
				onClick={() => {navigate('/')}}
			>
				Log Out
			</Button>

			<Container sx={{ py: 8 }} maxWidth="md">
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