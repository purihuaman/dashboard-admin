import { Outlet } from 'react-router-dom';

const LayoutAuth = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-[url('/assets/image/hero.jpg')] bg-no-repeat bg-cover px-2">
			<Outlet />
		</div>
	);
};

export default LayoutAuth;
