import { Input, Menu } from 'antd';
import styled from 'styled-components'
import { ShopOutlined } from "@ant-design/icons";
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import TitlebarSearch from './TitlebarSearch'

const SearchBackground = styled.div`
	display : flex;
	justify-content : center;
`

const StyledSearch = styled(Input.Search)`
	position : absolute;
	display : flex;
	width : 50%;
	top : 20%;
	justify-content : center;
`

const Background = {
	background : 'gray',

}

function Search() {
	return(
    <div>
		<TitlebarSearch/>
		<SearchBackground>
			<StyledSearch
				size="large"
				placeholder="Search for café"
				prefix={<ShopOutlined />}
			/>
		</SearchBackground>
	</div>
		
  )
}

export default Search;
