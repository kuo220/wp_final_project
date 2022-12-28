import { Input, Menu } from 'antd';
import { ShopOutlined } from "@ant-design/icons";
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'

function Home() {
	return(
    <>
	<Input.Search
		size="large"
		placeholder="Search for Restaurant"
		prefix={<ShopOutlined />}
	/>
    </>
  )
}

export default Home;
