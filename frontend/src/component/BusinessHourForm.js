import * as React from 'react';
import dayjs from 'dayjs';
import {InputNumber, Space, Row} from 'antd';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function BusinessHourForm(props) {
	const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<LocalizationProvider dateAdapter={AdapterMoment}>
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
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Open Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Sunday open time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Close Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Sunday close time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'3vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Monday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Open Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Monday open time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Close Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Monday close time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'3vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Tuesday
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Open Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Tuesday open time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Close Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Tuesday close time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'3vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Wednesday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Open Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Wednesday open time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Close Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Wednesday close time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'3vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Thursday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Open Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Thursday open time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Close Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Thursday close time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'3vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Friday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Open Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Friday open time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Close Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Friday close time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

				<div style={{height:'3vh'}}></div>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Saturday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Open Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Saturday open time'] = time
									props.setBusinessHour(tmp)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							ampmInClock
							views={['hours', 'minutes']}
							inputFormat="hh:mm"
							mask="__:__"
							label="Close Time"
							value={value}
							
							onChange={(e) => {
								// handleChange(e)
								if(e !== null){
									let hour = (e._d).getHours()
									let minute = (e._d).getMinutes()
									let time = hour.toString() + ' : ' + minute.toString()
									let tmp = props.businessHour
									tmp['Saturday close time'] = time
									props.setBusinessHour(tmp)
									console.log(props.businessHour)
								}
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Space>
				</Grid>

			</LocalizationProvider>
			
		</React.Fragment>
	);
}

export default BusinessHourForm