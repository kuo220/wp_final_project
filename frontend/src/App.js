import Login from './container/Login'
import Home from './container/Home'
import Register from './container/Register'
import Search from './container/Search'
import Cafe from './container/Cafe'
import {useHooks} from './container/hooks/Hooks'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    const {login, setLogin, currentpage, setCurrentpage} = useHooks();
  	// useEffect(()=>{	
	// 	if(currentpage === 'Logout'){
	// 		setCurrentpage('Home')
	// 		setLogin(false)
	// 	}

  	// },[currentpage])

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/login" element={<Login/>} />
					<Route path="/search" element={<Search/>} />
					<Route path="/register" element={<Register/>} />
					<Route path="/cafe/:id" element={<Cafe/>} />
				</Routes>
        	</Router>
		</>
	);
}

export default App;
