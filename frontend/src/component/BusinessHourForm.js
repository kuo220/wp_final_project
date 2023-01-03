import * as React from 'react';
import dayjs from 'dayjs';
import {InputNumber, Space, Row} from 'antd';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function BusinessHourForm() {
	const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Typography variant="h6" gutterBottom>
					Business Hours
				</Typography>

				<Grid  item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Sunday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'2vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Monday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'2vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Tuesday
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'2vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Wednesday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'2vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Thursday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'2vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Friday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'2vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Saturday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>
				
			</LocalizationProvider>
			
		</React.Fragment>
	);
}

export default BusinessHourForm