import * as React from 'react';
import dayjs from 'dayjs';
import {InputNumber, Space, Row} from 'antd';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
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
							onChange={(e) => {
								handleChange(e.target.value)
								let openTime = {}
								let tmp = props.businessHour
								openTime['Sunday open time'] = e.target.value
								tmp.push(openTime)
								props.setBusinessHour(tmp)
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let closeTime = {}
								let tmp = props.businessHour
								closeTime['Sunday close time'] = e.target.value
								tmp.push(closeTime)
								props.setBusinessHour(tmp)
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
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let openTime = {}
								let tmp = props.businessHour
								openTime['Monday open time'] = e.target.value
								tmp.push(openTime)
								props.setBusinessHour(tmp)
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let closeTime = {}
								let tmp = props.businessHour
								closeTime['Monday close time'] = e.target.value
								tmp.push(closeTime)
								props.setBusinessHour(tmp)
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
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let openTime = {}
								let tmp = props.businessHour
								openTime['Tuesday open time'] = e.target.value
								tmp.push(openTime)
								props.setBusinessHour(tmp)
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let closeTime = {}
								let tmp = props.businessHour
								closeTime['Tuesday close time'] = e.target.value
								tmp.push(closeTime)
								props.setBusinessHour(tmp)
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
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let openTime = {}
								let tmp = props.businessHour
								openTime['Wednesday open time'] = e.target.value
								tmp.push(openTime)
								props.setBusinessHour(tmp)
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let closeTime = {}
								let tmp = props.businessHour
								closeTime['Wednesday close time'] = e.target.value
								tmp.push(closeTime)
								props.setBusinessHour(tmp)
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
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let openTime = {}
								let tmp = props.businessHour
								openTime['Thursday open time'] = e.target.value
								tmp.push(openTime)
								props.setBusinessHour(tmp)
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let closeTime = {}
								let tmp = props.businessHour
								closeTime['Thursday close time'] = e.target.value
								tmp.push(closeTime)
								props.setBusinessHour(tmp)
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
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let openTime = {}
								let tmp = props.businessHour
								openTime['Friday open time'] = e.target.value
								tmp.push(openTime)
								props.setBusinessHour(tmp)
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let closeTime = {}
								let tmp = props.businessHour
								closeTime['Friday close time'] = e.target.value
								tmp.push(closeTime)
								props.setBusinessHour(tmp)
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
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let openTime = {}
								let tmp = props.businessHour
								openTime['Saturday open time'] = e.target.value
								tmp.push(openTime)
								props.setBusinessHour(tmp)
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
								to
						<TimePicker
							label="Time"
							value={value}
							onChange={(e) => {
								handleChange(e.target.value)
								let closeTime = {}
								let tmp = props.businessHour
								closeTime['Saturday close time'] = e.target.value
								tmp.push(closeTime)
								props.setBusinessHour(tmp)
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