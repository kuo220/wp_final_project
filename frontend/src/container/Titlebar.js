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
      {
        label:'Home',
        key:'home',
        icon:<HomeOutlined />,
      },
      {
        label:'Login',
        key:'login',
        icon:<LoginOutlined />,
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
        <Menu 
          onClick={ handleClick } 
          mode="horizontal" 
          items={items} 
          style={{backgroundColor : '#FEF9E7'}} 
        />
      </>
    )
}

export default Titlebar;
