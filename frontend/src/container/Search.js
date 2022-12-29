import { Input, Menu } from 'antd';
import styled from 'styled-components'
import { ShopOutlined } from "@ant-design/icons";
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import TitlebarSearch from './TitlebarSearch'

const SearchBackground = styled.div`
	width : 100vw;
	height : 100vh;
	background-color : #F8C471;
`

const StyledSearch = styled(Input.Search)`
	position : absolute;
	display : flex;
	width : 50%;
	top : 25%;
	left : 25%;
	right : 25%;
`


function Search() {
	return(
	<SearchBackground>
		<TitlebarSearch/>
		<StyledSearch
			size="large"
			placeholder="Search for café"
			prefix={<ShopOutlined />}
		/>
		
	</SearchBackground>
		
  )
}

export default Search;
