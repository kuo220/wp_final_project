import { Menu } from 'antd';
import { EditOutlined, HomeOutlined, SearchOutlined, LoginOutlined, LogoutOutlined, BlockOutlined } from '@ant-design/icons';
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'
import Titlebar from './Titlebar';

function Register() {
  //const [current, setCurrent] = useState('Login');
  const {login, setLogin, currentpage, setCurrentpage} = useHooks();

  return(
    <>
      <Titlebar/>
      register
    </>
  )
}

export default Register;
