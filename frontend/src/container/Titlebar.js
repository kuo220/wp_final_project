import { Menu } from 'antd';
import { EditOutlined, HomeOutlined, SearchOutlined, LoginOutlined, LogoutOutlined, BlockOutlined } from '@ant-design/icons';
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks';
import { useNavigate } from 'react-router-dom';


function Titlebar() {
  //const [current, setCurrent] = useState('Login');
  const {login, setLogin, currentpage, setCurrentpage} = useHooks();

  const navigate = useNavigate();

  const items = [
    // {
    //   label:'What are you thinking?',
    //   key:'What are you thinking?',
    //   icon: <EditOutlined />,
    //   disabled: !login,
    // },
    // {
    //   label:'Posts',
    //   key:'Posts',
    //   icon:<BlockOutlined />,
    //   disabled: !login,
    // },
    // {
    //   label:'SearchFriend',
    //   key:'SearchFriend',
    //   icon:<SearchOutlined />,
    //   disabled: !login,
    // },
    {
      label:'Home',
      key:'home',
      icon:<HomeOutlined />,
      //disabled: !login,
    },
    {
      label:'Login',
      key:'login',
      icon:<LoginOutlined />,
      //disabled: login,
    },
  ]

  const handleClick = (e) => {
    let path;
    if(e.key === 'home') path = '/';
    else path = `/${e.key}`;
    navigate(path);
  }

  return(
    <>
      <Menu onClick={ handleClick } mode="horizontal" items={items} />
    </>
  )
}

export default Titlebar;
