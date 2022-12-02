import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [notification, setNotification] = useState(8);
	const [perfilMenu, setPerfilMenu] = useState(false);
	const [notificationsMenu, setNotificationsMenu] = useState(false);

	const handleHidePerfilMenu = () => setPerfilMenu(!perfilMenu);

	const handleHideNotificationsMenu = () =>
		setNotificationsMenu(!notificationsMenu);

	return (
		<header className="h-[10vh] p-4 border-b border-slate-800">
			<nav className="flex items-center gap-x-1 py-2 relative z-10">
				<button
					onClick={handleHideNotificationsMenu}
					className="relative ml-auto relative py-2 px-3 hover:bg-slate-800 rounded-lg transition-colors duration-500"
				>
					<i className="ri-notification-line"></i>
					<span
						className={`block absolute top-1 right-1 h-[15px] w-[15px] box-content bg-blue-500 rounded-full text-[10px] text-center`}
					>
						{notification}
					</span>

					{/* Submenu */}
					<ul
						className={`absolute -left-10 w-[300px] mt-5 bg-slate-800 ${
							notificationsMenu ? 'h-min -scale-y-1 z-50' : 'h-0 scale-y-0 '
						} transition-[height, transform] duration-150 flex flex-col gap-2 py-3 px-2 rounded-md cursor-default`}
					>
						<div className="text-2xl py-2 px-4 text-center font-bold">
							<span>Notifications</span>
						</div>

						<hr className="border-slate-700" />

						<li>
							<Link
								to="/setting"
								className="block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md flex items-center gap-x-2"
							>
								<img
									src="/assets/image/purihuaman.png"
									alt=""
									className="w-10 h-10 object-cover rounded-full bg-blue-50"
								/>
								<div className="w-full flex flex-col items-start">
									<div className="w-full flex items-center justify-between gap-2 text-left">
										<p>Pedro Purihuaman</p>
										<p className="text-xs text-slate-300">28/11/2022</p>
									</div>
									<p className="text-sm text-slate-300 whitespace-nowrap text-ellipsis overflow-hidden max-w-[180px]">
										Lorem ipsum dolor sit...
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								to="/setting"
								className="block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md flex items-center gap-x-2"
							>
								<div className="w-12 h-10 bg-blue-100 inline-flex items-center justify-center rounded-full">
									<i className="ri-thumb-up-line text-blue-500"></i>
								</div>

								<div className="w-full flex flex-col items-start">
									<div className="w-full flex items-center justify-between gap-2 text-left">
										<p>New like</p>
										<p className="text-xs text-slate-300">28/11/2022</p>
									</div>
									<p className="text-sm text-left text-slate-300  whitespace-nowrap text-ellipsis overflow-hidden max-w-[180px]">
										Vegeta liked your post...
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								to="/setting"
								className="block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md flex items-center gap-x-2"
							>
								<div className="w-12 h-10 bg-green-50 inline-flex items-center justify-center rounded-full">
									<i className="ri-chat-1-line text-green-500"></i>
								</div>

								<div className="w-full flex flex-col items-start">
									<div className="w-full flex items-center justify-between gap-2 text-left">
										<p>New comment</p>
										<p className="text-xs text-slate-300">28/11/2022</p>
									</div>
									<p className="text-sm text-slate-300 whitespace-nowrap text-ellipsis overflow-hidden max-w-[180px]">
										Goku commented on your post...
									</p>
								</div>
							</Link>
						</li>

						<hr className="border-slate-700" />

						<li className="cursor-default">
							<Link
								to="/"
								className="my-2 inline-block py-2 px-2 rounded-md text-slate-300 hover:text-blue-500"
							>
								All notifications
							</Link>
						</li>
					</ul>
				</button>

				{/* Perfil */}
				<div className="relative z-10 overflows-y-hidden">
					<div
						onClick={handleHidePerfilMenu}
						className="flex items-center py-2 px-3 gap-x-2 hover:bg-slate-800 rounded-lg transition-colors duration-500 cursor-pointer"
					>
						<img
							src="/assets/image/purihuaman.png"
							alt=""
							className="w-7 h-7 object-cover rounded-full bg-blue-50"
						/>
						<span>Pedro Purihuaman</span>
						<i
							className={`${perfilMenu && '-rotate-90'} ri-arrow-down-s-line`}
						></i>
					</div>

					<ul
						className={`absolute right-0 w-[300px] mt-4 bg-slate-800 ${
							perfilMenu ? 'h-min -scale-y-1 z-50' : 'h-0 scale-y-0 '
						} transition-[height, transform] duration-150 flex flex-col gap-2 py-3 px-2 rounded-md`}
					>
						<li>
							<Link
								to="/profile"
								className="block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md flex items-center gap-x-2"
							>
								<img
									src="/assets/image/purihuaman.png"
									alt=""
									className="w-10 h-10 object-cover rounded-full bg-blue-50"
								/>
								<div className="flex flex-col">
									<span className="text-left">Pedro Purihuaman</span>
									<span className="text-sm text-slate-300">
										pedropurihuaman@gmail.com
									</span>
								</div>
							</Link>
						</li>

						<hr className="border-slate-700" />

						<li>
							<Link
								to="/setting"
								className="block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md flex items-center gap-x-2"
							>
								<i className="ri-tools-line"></i>
								Setting
							</Link>
						</li>

						<li>
							<Link
								to="/sign-off"
								className="block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md flex items-center gap-x-2"
							>
								<i className="ri-logout-circle-r-line"></i>
								Sign off
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
