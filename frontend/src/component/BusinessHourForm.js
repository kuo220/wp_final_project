import * as React from 'react';
import {InputNumber, Space} from 'antd';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TypedInputNumber from 'antd/es/input-number';

function BusinessHourForm() {
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Business Hours
			</Typography>
			<Grid container spacing={1}>
				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Sunday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
							<InputNumber size="medium" min={1} max={24} defaultValue={1}/>
							<div>
								to
							</div>
							<InputNumber size="medium" min={1} max={24} defaultValue={24}/>	
					</Space>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Monday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
							<InputNumber size="medium" min={1} max={24} defaultValue={1}/>
							<div>
								to
							</div>
							<InputNumber size="medium" min={1} max={24} defaultValue={24}/>	
					</Space>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Tuesday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
							<InputNumber size="medium" min={1} max={24} defaultValue={1}/>
							<div>
								to
							</div>
							<InputNumber size="medium" min={1} max={24} defaultValue={24}/>	
					</Space>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Wednesday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
							<InputNumber size="medium" min={1} max={24} defaultValue={1}/>
							<div>
								to
							</div>
							<InputNumber size="medium" min={1} max={24} defaultValue={24}/>	
					</Space>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Thursday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
							<InputNumber size="medium" min={1} max={24} defaultValue={1}/>
							<div>
								to
							</div>
							<InputNumber size="medium" min={1} max={24} defaultValue={24}/>	
					</Space>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Friday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
							<InputNumber size="medium" min={1} max={24} defaultValue={1}/>
							<div>
								to
							</div>
							<InputNumber size="medium" min={1} max={24} defaultValue={24}/>	
					</Space>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						Saturday
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Space size="middle">
							<InputNumber size="medium" min={1} max={24} defaultValue={1}/>
							<div>
								to
							</div>
							<InputNumber size="medium" min={1} max={24} defaultValue={24}/>	
					</Space>
				</Grid>

			</Grid>
		</React.Fragment>
	);
}

export default BusinessHourForm