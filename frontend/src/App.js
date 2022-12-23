import Login from './container/Login'
import Thinking from './container/Thinking'
import Home from './container/Home'
import Posts from './container/Posts'
import SearchFriend from './container/SearchFriend'
import Titlebar from './container/Titlebar'
import Register from './container/Register'
import {useHooks} from './container/hooks/Hooks'
import { useEffect } from 'react'
function App() {
  const {setLogin,currentpage, setCurrentpage} = useHooks();
  useEffect(()=>{
    if(currentpage === 'Logout'){
      setCurrentpage('Login')
      setLogin(false)
    }
  },[currentpage])

  return (
    <>
      <Titlebar/>
      {
        currentpage === 'What are you thinking?' ? <Thinking/>:
        currentpage === 'Home' ? <Home/>:
        currentpage === 'Posts' ? <Posts/>:
        currentpage === 'SearchFriend' ? <SearchFriend/>:
        currentpage === 'Login' ? <Login/>:<Register/>
      }
      
    </>
  );
}

export default App;
