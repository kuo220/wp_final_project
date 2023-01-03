import * as React from 'react';
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


// const SearchBox = styled(Input)`
// 	position : absolute;
// 	display : flex;
// 	width : 52%;
// 	height : 8%;
// 	top : 25%;
// 	left : 22%;
// 	right : 25%;
// `

const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: '#DB8F00',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#DB8F00',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#FFCF78',
		},
		'&:hover fieldset': {
			borderColor: '#DB8F00',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#DB8F00',
		},
	},
});

const SearchBox = {
	position : 'absolute',
	width : '52%',
	height : '8%',
	top : '25%',
	left : '22%',
	right : '25%',
}

const SearchButton = {
	position : 'absolute',
	backgroundColor : '#DB8F00',
	color : 'white',
	height : '7.7%',
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
			<AppBar position="relative">
				<Toolbar style={{backgroundColor:"#FFBD45", height:'15vh'}}>
					<LocalCafeIcon sx={{ mr: 2 }} />
					<Typography variant="h4" color="inherit" noWrap>
						Café Finder
					</Typography>
					</Toolbar>
			</AppBar>
			<main>

			<Box
			sx={{
				bgcolor: 'background.paper',
				pt: 8,
				pb: 6,
			}}
			>
			<Container maxWidth="sm">

				{/* <SearchBox
					size="large"
					placeholder="Search for café"
					prefix={<ShopOutlined />}
				/> */}

				<CssTextField  id="custom-css-outlined-input"
					placeholder='Search for café'
					style={SearchBox}
				/>

				<Button variant='contained' size ='large'
					style={SearchButton}
				>
					<SearchIcon/>
				</Button>

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