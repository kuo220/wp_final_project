import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCafeForm from '../component/AddCafeForm';
import BusinessHourForm from '../component/BusinessHourForm';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';


const steps = ['Basic Info', 'Business hours'];



// function getStepContent(step) {
// 	switch (step) {
// 		case 0:
// 			return <AddCafeForm/>;
// 		case 1:
// 			return <BusinessHourForm />;
// 		default:
// 			throw new Error('Unknown step');
// 	}
// }

const theme = createTheme();

function AddCafe() {
	const navigate = useNavigate();
	const [activeStep, setActiveStep] = React.useState(0);

	// Information of new Café
	const [cafeName, setCafeName] = useState('');
	const [phoneNum, setPhoneNum] = useState('')
	const [city, setCity] = useState('');
	const [district, setDistrict] = useState('');
	const [address, setAddress] = useState('');
	const [businessHour, setBusinessHour] = useState([{}]);


	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <AddCafeForm cafeName={cafeName} setCafeName={setCafeName} phoneNum={phoneNum} setPhoneNum={setPhoneNum} city={city} setCity={setCity} district={district} setDistrict={setDistrict} address={address} setAddress={setAddress}/>;
			case 1:
				return <BusinessHourForm businessHour={businessHour} setBusinessHour={setBusinessHour}/>;
			default:
				throw new Error('Unknown step');
		}
	}

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

					<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
						{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
						))}
					</Stepper>

					{activeStep === steps.length ? (
					<React.Fragment>
						<Typography variant="h5" gutterBottom>
							Thank you for your Café Review.
						</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
								<Button
									variant="contained"
									onClick={() => {navigate('/search')}}
									sx={{ mt: 3, ml: 1 }}
								>
									Complete
								</Button>
							</Box>
					</React.Fragment>
					) : (
						<React.Fragment>
							{getStepContent(activeStep)}
							<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
								{activeStep !== 0 && (
								<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
									Back
								</Button>
								)}

								<Button
									variant="contained"
									onClick={handleNext}
									sx={{ mt: 3, ml: 1 }}
								>
									{activeStep === steps.length - 1 ? 'Done' : 'Next'}
								</Button>
							</Box>
						</React.Fragment>
					)}
				</Paper>
			</Container>
		</ThemeProvider>
	);
}

export default AddCafe;