import {Input, Button} from 'antd';
import styled from 'styled-components'
import {UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined} from "@ant-design/icons";
import { useState , useRef } from "react";
import {useHooks} from './hooks/Hooks'
import Titlebar from './Titlebar'
import { useNavigate } from 'react-router-dom';
import coffee from '../picture/coffee.jpg';

const StyledBackground = styled.div`
	width : 100vw;
	height : 100vh;
	background-color : #F5DEB3;
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
	// backgroundColor : 'brown',
}

function Login() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const bodyRef = useRef(null);
	const {setCurrentpage, login, setLogin} = useHooks();
	const [passwordVisible, setPasswordVisible] = useState(false);
	

	// const appear_password = (password) => {
	// 	let a = '';
	// 	for(let i = 0; i < password.length; i++) a += '*';
	// 	return a;
	// }

	const navigate = useNavigate();

	return (
		<StyledBackground>
			{/* <Titlebar/> */}
			<img src={coffee} width='100%' height='100%' style={{opacity:'0.85'}}/>
			<div style={StyledLogin}>
				<Input
					size='large'
					style={{ height: '3.3rem', width: '35rem', margin: 10 }}
					placeholder="Enter account"
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
				{/* <Input.Search
					ref={bodyRef}
					size="large"
					style={{ width: 300, margin: 10}}
					prefix={<UserOutlined />}
					placeholder="Enter your password"
					value={appear_password(password)}
					onChange={(e) => setPassword(e.target.value)}
					enterButton="Sign In"
					onSearch={()=>{setLogin(true); navigate('/search')}}
				/> */}
				<Input.Password
					size='large'
					placeholder='Enter password'
					prefix={<LockOutlined />}
					style={{ height : '3.3rem', width: '35rem', margin: 10 }}
					onChange={(e) => setPassword(e.target.value)}
					iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
				/>
				<div/>
				<Button
					size = 'large'
					style={{display:'flex', justifyContent:'center', alignItems:'center', width: 150, margin: 10, backgroundColor: '#DB8F00', fontSize : '1.5rem', color : 'white'}} 
					onClick={()=>{setLogin(true); navigate('/search')}}> Log In </Button>
			</div>
			
		</StyledBackground>

	);
}

export default Login;
