import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
	const [hideSubMenu, setHideSubMenu] = useState(false);

	const handleHideSubMenu = () => {
		setHideSubMenu(!hideSubMenu);
	};

	return (
		<aside className="h-[100vh] overflow-y-scroll p-4">
			<nav className="flex flex-col h-full">
				<h1 className="text-center text-2xl">
					Admin<span className="text-blue-500 text-4xl">.</span>
				</h1>

				<ul className="pt-6 flex flex-col gap-2">
					<li className="bg-blue-90">
						<Link
							to="/"
							className="inline-flex items-center gap-2 text-slate-100 w-full p-2 rounded-md hover:bg-slate-900 hover:text-blue-500 transition-colors duration-500 text-left"
						>
							<i className="ri-bar-chart-2-line text-blue-500"></i>
							Analytics
						</Link>
					</li>

					<li className="bg-blue-90 overflow-y-hidden">
						<button
							onClick={handleHideSubMenu}
							className="flex items-center gap-2 text-slate-100 w-full p-2 rounded-md hover:bg-slate-900 hover:text-blue-500 transition-colors duration-500 text-left"
						>
							<span className="pt-1">
								<i className="ri-earth-line text-blue-500"></i>
							</span>
							<span>Social networks</span>
							<span className="pt-1">
								<i
									className={`${
										hideSubMenu
											? 'ri-arrow-down-s-line'
											: 'ri-arrow-right-s-line'
									}`}
								></i>
							</span>
						</button>

						<ul
							className={`bg-blue-90  ${
								hideSubMenu ? 'h-fit' : 'h-[0]'
							} transition-[height] duration-[500ms]`}
						>
							<li className="border-l ml-6 border-slate-700">
								<Link
									to="/"
									className="block w-full py-2 pl-3 relative text-slate-100 before:h-3 before:w-3 before:absolute before:bg-blue-500 before:rounded-full before:block  before:-left-[6.5px] before:border-4 before:border-slate-800 inline-flex items-center rounded-md hover:bg-slate-900 hover:text-blue-500 transition-colors duration-500"
								>
									Post Social Network
								</Link>
							</li>

							<li className="border-l ml-6 border-slate-700">
								<Link
									to="/"
									className="block w-full py-2 pl-3 relative text-slate-100 before:h-3 before:w-3 before:absolute before:bg-slate-700 before:rounded-full before:block  before:-left-[6.5px] before:border-4 before:border-slate-800 inline-flex items-center rounded-md hover:bg-slate-900 hover:text-blue-500 transition-colors duration-500"
								>
									Statistics
								</Link>
							</li>

							<li className="border-l ml-6 border-slate-700">
								<Link
									to="/"
									className="block w-full py-2 pl-3 relative text-slate-100 before:h-3 before:w-3 before:absolute before:bg-slate-700 before:rounded-full before:block  before:-left-[6.5px] before:border-4 before:border-slate-800 inline-flex items-center rounded-md hover:bg-slate-900 hover:text-blue-500 transition-colors duration-500"
								>
									Profiles
								</Link>
							</li>
						</ul>
					</li>

					<li className="bg-blue-90">
						<Link
							to="/support"
							className="inline-flex items-center gap-2 text-slate-100 w-full p-2 rounded-md hover:bg-slate-900 hover:text-blue-500 transition-colors duration-500"
						>
							<i className="ri-user-settings-line text-blue-500"></i>
							Support
						</Link>
					</li>

					<li className="bg-blue-90">
						<Link
							to="/calendar"
							className="inline-flex items-center gap-2 text-slate-100 w-full p-2 rounded-md hover:bg-slate-900 hover:text-blue-500 transition-colors duration-500"
						>
							<i className="ri-calendar-line text-blue-500"></i>
							calendar
						</Link>
					</li>
				</ul>

				<div className="mt-auto">
					<Link
						to="/sign-off"
						className="inline-flex items-center gap-2 text-slate-100 w-full p-2 rounded-md hover:bg-slate-900 hover:text-blue-500 transition-colors duration-500"
					>
						<i className="ri-logout-circle-r-line text-blue-500"></i>
						Sign off
					</Link>
				</div>
			</nav>
		</aside>
	);
};

export default SideBar;
