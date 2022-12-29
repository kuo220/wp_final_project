import { Menu } from 'antd';
import { EditOutlined, HomeOutlined, SearchOutlined, LoginOutlined, LogoutOutlined, BlockOutlined } from '@ant-design/icons';
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import { useNavigate } from 'react-router-dom';

function TitlebarSearch() {
  const {login, setLogin, currentpage, setCurrentpage} = useHooks();

  const navigate = useNavigate();

  const items = [
    {
      label:'Search',
      key:'search',
      icon:<LoginOutlined />,
      disabled: login,
    },
    {
      label:'Logout',
      key:'logout',
      icon:<LogoutOutlined />,
      disabled: !login,
    },
  ]

  const handleClick = (e) => {
    let path;
    if(e.key === 'logout') path = '/';
    else path = `/${e.key}`;
    navigate(path);
  }

  return(
    <>
      <Menu onClick={ handleClick } selectedKeys={[currentpage]} mode="horizontal" items={items} />
    </>
  )
}

export default TitlebarSearch;
