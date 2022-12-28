import { Menu } from 'antd';
import { EditOutlined, HomeOutlined, SearchOutlined, LoginOutlined, LogoutOutlined, BlockOutlined } from '@ant-design/icons';
import { useState , useRef, useEffect } from "react";
import {useHooks} from './hooks/Hooks'

function Register() {
  //const [current, setCurrent] = useState('Login');
  const {login, setLogin, currentpage, setCurrentpage} = useHooks();

  return(
    <>
      register
    </>
  )
}

export default Register;
