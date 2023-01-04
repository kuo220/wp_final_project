import { Menu } from 'antd';
import { EditOutlined, HomeOutlined, SearchOutlined, LoginOutlined, LogoutOutlined, BlockOutlined } from '@ant-design/icons';
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function TitlebarSearch() {
  const {login, setLogin, currentpage, setCurrentpage} = useHooks();

  const navigate = useNavigate();
  const { name, userid } = useParams();

  const items = [
    {
      label:'Search',
      key:'search/'+name+'/'+userid,
      icon:<LoginOutlined />,
    },
    {
      label:'Logout',
      key:'logout',
      icon:<LogoutOutlined />,
    },
  ]

  const handleClick = (e) => {
    let path;
    console.log(e.key)
    if(e.key === 'logout') path = '/';
    else path = `/${e.key}`;
    navigate(path);
  }

  return(
    <>
      <Menu 
        onClick={ handleClick } 
        mode="horizontal" 
        items={items} 
        style={{backgroundColor : '#F5DEB3'}}
      />
    </>
  )
}

export default TitlebarSearch;
