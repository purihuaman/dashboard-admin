import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages Layouts
import LayoutAdmin from './layouts/LayoutAdmin';
import Chat from './pages/admin/Chat';

// Pages auth
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Pages adming
import Home from './pages/admin/Home';
import Error404 from './pages/Error404';
import ForgetPassword from './pages/auth/ForgetPassword';
import Profile from './pages/admin/Profile';
import Support from './pages/admin/Support';
import Calendar from './pages/admin/Calendar';
import Setting from './pages/admin/Setting';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/recover-password" element={<ForgetPassword />} />

				<Route exact path="/" element={<LayoutAdmin />}>
					<Route index element={<Home />} />
					<Route exact path="profile" element={<Profile />} />
					<Route exact path="chat" element={<Chat />} />
					<Route exact path="support" element={<Support />} />
					<Route exact path="calendar" element={<Calendar />} />
					<Route exact path="setting" element={<Setting />} />
				</Route>

				<Route path="*" element={<Error404 />} />
			</Routes>
		</Router>
	);
}

export default App;
