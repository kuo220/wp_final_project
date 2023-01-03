import Login from './container/Login'
import Home from './container/Home'
import Register from './container/Register'
import Search from './container/Search'
import CafeInfo from './container/CafeInfo'
import SignIn from './container/SignIn'
import ReviewScore from './container/ReviewScore'
import Comments from './container/Comment'
import Plane from './container/2DGraph'
import AddCafe from './container/AddCafe'
import CreatePlane from './container/CreatePlane'
import AddRate from './container/AddRate'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/login" element={<SignIn/>} />
					<Route path="/search" element={<Search/>} />
					<Route path="/addcafe" element={<AddCafe/>}/>
					<Route path="/register" element={<Register/>} />
					<Route path="/search/cafe/:id" element={<CafeInfo/>} />
					<Route path="/search/cafe/:id/review" element={<ReviewScore/>} />
					<Route path="/search/cafe/:id/review/addrate" element={<AddRate/>} />
					<Route path="/search/cafe/:id/comments" element={<Comments/>} />
					<Route path="/search/cafe/:id/plane" element={<Plane/>} />
					<Route path="/search/cafe/:id/plane/create" element={<CreatePlane/>} />
				</Routes>
        	</Router>
		</>
	);
}

export default App;
