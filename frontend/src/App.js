import Login from './container/Login'
import Home from './container/Home'
import Titlebar from './container/Titlebar'
import Register from './container/Register'
import {useHooks} from './container/hooks/Hooks'
import { useEffect } from 'react'


function App() {
    const {login, setLogin, currentpage, setCurrentpage} = useHooks();
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
				currentpage === 'Home' ? <Home/> : 'Login' ? <Login/> : <Register/>
			}
		</>
	);
}

export default App;
