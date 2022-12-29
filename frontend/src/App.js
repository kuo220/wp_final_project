import Login from './container/Login'
import Home from './container/Home'
import Titlebar from './container/Titlebar'
import Register from './container/Register'
import Search from './container/Search'
import TitlebarSearch from './container/TitlebarSearch'
import {useHooks} from './container/hooks/Hooks'
import { useEffect } from 'react'


function App() {
    const {login, setLogin, currentpage, setCurrentpage} = useHooks();
  	useEffect(()=>{	
		if(currentpage === 'Logout'){
			setCurrentpage('Home')
			setLogin(false)
		}

  	},[currentpage])

	return (
		<>
			
			{	// Title bar
				currentpage === 'Home' ? <Titlebar/>
				:
				currentpage === 'Login' ? <Titlebar/> 
				: 
				currentpage === 'Search' ? <TitlebarSearch/>
				:
				<Titlebar/>
			}
			{	// Page
				currentpage === 'Home' ? <Home/> 
				:
				currentpage === 'Login' ? <Login/> 
				: 
				currentpage === 'Search' ? <Search/>
				:
				<Register/>
			}
		</>
	);
}

export default App;
