import { Input, Menu } from 'antd';
import styled from 'styled-components'
import { ShopOutlined, CoffeeOutlined} from "@ant-design/icons";
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import TitlebarSearch from './TitlebarSearch'

<<<<<<< HEAD
const SearchBackground = styled.div`
	display : flex;
	justify-content : center;
`

const InputSearch = styled(Input.Search)`
	position : absolute;
	width : 50%;
	top : 20%;
`


function Home() {
	return(
    <>
	<SearchBackground>
		<InputSearch
			size="large"
			placeholder="Search for café"
			prefix={<CoffeeOutlined />}
		/>
	</SearchBackground>
	
=======
function Search() {
	return(
    <>
		<TitlebarSearch/>
		<Input.Search
			size="large"
			placeholder="Search for café"
			prefix={<ShopOutlined />}
		/>
>>>>>>> refs/remotes/origin/main
    </>
  )
}

export default Search;
