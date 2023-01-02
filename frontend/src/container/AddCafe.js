import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCafeForm from '../component/AddCafeForm';


const theme = createTheme();

function AddCafe() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar
				position="absolute"
				color="default"
				elevation={0}
				sx={{
				position: 'relative',
				borderBottom: (t) => `1px solid ${t.palette.divider}`,
				}}
				>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Add New Café
					</Typography>
				</Toolbar>
			</AppBar>

			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
					<Typography component="h1" variant="h4" align="center">
						Café Info
					</Typography>
			
					<React.Fragment>
						<AddCafeForm/>
						<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
							<Button
								variant="contained"
								sx={{ mt: 3, ml: 1 }}
							>
								Done
							</Button>
						</Box>
					</React.Fragment>
				</Paper>
			</Container>
		</ThemeProvider>
	);
}

export default AddCafe;