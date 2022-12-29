import { Input, Menu } from 'antd';
import styled from 'styled-components'
import { ShopOutlined, CoffeeOutlined} from "@ant-design/icons";
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import TitlebarSearch from './TitlebarSearch'

const SearchBackground = styled.div`
	display : flex;
	justify-content : center;
`

const InputSearch = styled(Input.Search)`
	position : absolute;
	width : 50%;
	top : 20%;
`


function Search() {
	return(
    <>
		<TitlebarSearch/>
		<Input.Search
			size="large"
			placeholder="Search for café"
			prefix={<ShopOutlined />}
		/>
    </>
  )
}

export default Search;
