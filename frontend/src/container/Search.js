import { Input, Button } from 'antd';
import styled from 'styled-components'
import { ShopOutlined, PlusOutlined } from "@ant-design/icons";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import TitlebarSearch from './TitlebarSearch'


const SearchBackground = styled.div`
	width : 100vw;
	height : 100vh;
	background-color : #F8C471;
`

const SearchBox = styled(Input.Search)`
	position : absolute;
	display : flex;
	width : 50%;
	top : 25%;
	left : 25%;
	right : 25%;
`

const AddButton = styled(Button)`
	position : absolute;	
`


function Search() {
	return(
	<SearchBackground>
		{/* <TitlebarSearch/> */}
		<CssBaseline />
		<AddButton type='primary'>
			<PlusOutlined/>
		</AddButton>
		<SearchBox
			size="large"
			placeholder="Search for café"
			prefix={<ShopOutlined />}
		/>
		
	</SearchBackground>
		
  )
}

export default Search;
