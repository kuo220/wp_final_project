import Login from './container/Login'
import Home from './container/Home'
import Register from './container/Register'
import Search from './container/Search'
import CafeInfo from './container/CafeInfo'
import SignIn from './container/SignIn'
import Album from './container/Album'
import ReviewScore from './container/ReviewScore'
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
					<Route path="/login" element={<SignIn/>} />
					<Route path="/search" element={<Album/>} />
					<Route path="/register" element={<Register/>} />
					<Route path="/search/cafe/:id" element={<CafeInfo/>} />
					<Route path="/search/cafe/:id/review" element={<ReviewScore/>} />
				</Routes>
        	</Router>
		</>
	);
}

export default App;
