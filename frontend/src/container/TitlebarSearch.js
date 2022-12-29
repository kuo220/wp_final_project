import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { EditOutlined, HomeOutlined, SearchOutlined, LoginOutlined, LogoutOutlined, BlockOutlined } from '@ant-design/icons';
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import { getOverlay } from 'antd/es/popover/PurePanel';

const AMenu = styled(Menu)`
	background : #d2691e;
	height : rem;
	border-radius : 0%
`;


function TitlebarSearch() {
	const {login, setLogin, currentpage, setCurrentpage} = useHooks();

  	const items = [
		{
			label:'Search',
			key:'Search',
			icon:<LoginOutlined />,
			disabled: login,
		},
		{
			label:'Logout',
			key:'Logout',
			icon:<LogoutOutlined />,
			disabled: !login,
		},
	]

	const handleClick = (e) => {
		setCurrentpage(e.key);
	}

	return(
		<>
			<AMenu onClick={handleClick} selectedKeys={[currentpage]} mode="horizontal" items={items}/>
		</>
	)
}

export default TitlebarSearch;
