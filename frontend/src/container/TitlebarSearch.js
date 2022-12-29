import { Menu } from 'antd';
import { EditOutlined, HomeOutlined, SearchOutlined, LoginOutlined, LogoutOutlined, BlockOutlined } from '@ant-design/icons';
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'

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
      <Menu onClick={handleClick} selectedKeys={[currentpage]} mode="horizontal" items={items} />
    </>
  )
}

export default TitlebarSearch;
