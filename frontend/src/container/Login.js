import {Input, Button} from 'antd';
import styled from 'styled-components'
import { UserOutlined } from "@ant-design/icons";
import { useState , useRef } from "react";
import {useHooks} from './hooks/Hooks'
import Titlebar from './Titlebar'
import { useNavigate } from 'react-router-dom';

const StyledBackground = styled.div`
	width : 100vw;
	height : 100vh;
	background-color : #6E6E6E;
`
const StyledLogin = {
	position : 'absolute',
	display : 'flex',
	flexDirection : 'column',
	justifyContent : 'center',
	alignItems : 'center',
	width : '30%',
	height : '30%',
	top : '20%',
	left : '35%',
	// backgroundColor : 'lightgreen',
}

function Login() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const bodyRef = useRef(null);
	const {setCurrentpage, login, setLogin} = useHooks();

	const appear_password = (password) => {
		let a = '';
		for(let i = 0; i < password.length; i++) a += '*';
		return a;
	}

	const navigate = useNavigate();

	return (
		<StyledBackground>
			<Titlebar/>
			<div style={StyledLogin}>
				<Input
					size="large"
					style={{ width: 300, margin: 10 }}
					placeholder="Enter your name"
					prefix={<UserOutlined />}
					value={name}
					onChange={(e) => setName(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							bodyRef.current.focus()
						}
					}}
				/>
				<div/>
				<Input.Search
					ref={bodyRef}
					size="large"
					style={{ width: 300, margin: 10 }}
					prefix={<UserOutlined />}
					placeholder="Enter your password"
					value={appear_password(password)}
					onChange={(e) => setPassword(e.target.value)}
					enterButton="Sign In"
					onSearch={()=>{setLogin(true); navigate('/search')}}
				/>
				{/* <div/> */}
				<Button style={{width: 150, margin: 10}} onClick={()=>{navigate('/register')}}> Register </Button>
			</div>
			
		</StyledBackground>
	);
}

export default Login;
