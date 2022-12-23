import { Menu } from 'antd';
import { EditOutlined, HomeOutlined, SearchOutlined, LoginOutlined, LogoutOutlined, BlockOutlined } from '@ant-design/icons';
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'

function Titlebar() {
  //const [current, setCurrent] = useState('Login');
  const {login,setLogin,currentpage, setCurrentpage} = useHooks();

  const items = [
    {
      label:'What are you thinking?',
      key:'What are you thinking?',
      icon: <EditOutlined />,
      disabled: !login,
    },
    {
      label:'Posts',
      key:'Posts',
      icon:<BlockOutlined />,
      disabled: !login,
    },
    {
      label:'SearchFriend',
      key:'SearchFriend',
      icon:<SearchOutlined />,
      disabled: !login,
    },
    {
      label:'Home',
      key:'Home',
      icon:<HomeOutlined />,
      disabled: !login,
    },
    {
      label:'Login',
      key:'Login',
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

export default Titlebar;
