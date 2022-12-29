import { Input, Menu } from 'antd';
import { ShopOutlined } from "@ant-design/icons";
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import TitlebarSearch from './TitlebarSearch'

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
