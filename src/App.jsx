import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages Layouts
import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutAuth from './layouts/LayoutAuth';
import Chat from './pages/admin/Chat';

// Pages auth
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Pages adming
import Home from './pages/admin/Home';
import Error404 from './pages/Error404';
import ForgetPassword from './pages/auth/ForgetPassword';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/auth" element={<LayoutAuth />}>
					<Route index element={<Login />} />
					<Route exact path="registro" element={<Register />} />
					<Route exact path="recuperar-password" element={<ForgetPassword />} />
				</Route>

				<Route exact path="/" element={<LayoutAdmin />}>
					<Route index element={<Home />} />
					<Route exact path="chat" element={<Chat />} />
				</Route>

				<Route path="*" element={<Error404 />} />
			</Routes>
		</Router>
	);
}

export default App;
