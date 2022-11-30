import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const LayoutAdmin = () => {
	const [hideMenu, setHideMenu] = useState(false);

	const handleHideMenu = () => setHideMenu(!hideMenu);

	return (
		<div className="min-h-screen p2 grid grid-cols-1 xl:grid-cols-6 gap-2">
			<div
				className={`xl:col-span-1 bg-slate-800 fixed z-10 xl:sticky top-0 lef-0 w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full ${
					hideMenu ? 'left-0' : '-left-full'
				} transition-[left] duration-500`}
			>
				<SideBar />

				<button
					onClick={handleHideMenu}
					className="fixed bottom-4 right-4 z-50 h-12 w-12 inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors xl:hidden"
				>
					<i className={`${hideMenu ? 'ri-close-line' : 'ri-menu-4-fill'}`}></i>
				</button>
			</div>

			<div className="xl:col-span-5 flex flex-col gap-2">
				<Header />

				<div className="h-[90vh] p-4 overflow-y-scroll">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default LayoutAdmin;
