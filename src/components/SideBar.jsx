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
					Admin<span className="text-purple-500 text-4xl">.</span>
				</h1>

				<ul className="pt-6 flex flex-col gap-2">
					<li className="bg-purple-90">
						<Link
							to="/"
							className="inline-flex items-center gap-2 text-slate-400 w-full p-2 rounded-md hover:bg-slate-900 hover:text-purple-500 transition-colors duration-1000"
						>
							<i className="ri-bar-chart-2-line text-purple-500"></i>
							Analíticas
						</Link>
					</li>

					<li className="bg-purple-90 overflow-y-hidden">
						<button
							onClick={handleHideSubMenu}
							className="flex items-center gap-2 text-slate-400 w-full p-2 rounded-md hover:bg-slate-900 hover:text-purple-500 transition-colors duration-1000"
						>
							<span className="pt-1">
								<i className="ri-earth-line text-purple-500"></i>
							</span>
							<span>Redes sociales</span>
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
							className={`bg-purple-90  ${
								hideSubMenu ? 'h-fit' : 'h-[0]'
							} transition-[height] duration-[500ms]`}
						>
							<li className="border-l ml-6 border-slate-700">
								<Link
									to="/"
									className="block w-full py-2 pl-3 relative text-slate-400 before:h-3 before:w-3 before:absolute before:bg-purple-500 before:rounded-full before:block  before:-left-[6.5px] before:border-4 before:border-slate-800 inline-flex items-center rounded-md hover:bg-slate-900 hover:text-purple-500 transition-colors duration-1000"
								>
									Post red social
								</Link>
							</li>

							<li className="border-l ml-6 border-slate-700">
								<Link
									to="/"
									className="block w-full py-2 pl-3 relative text-slate-400 before:h-3 before:w-3 before:absolute before:bg-slate-700 before:rounded-full before:block  before:-left-[6.5px] before:border-4 before:border-slate-800 inline-flex items-center rounded-md hover:bg-slate-900 hover:text-purple-500 transition-colors duration-1000"
								>
									Estadisticas
								</Link>
							</li>

							<li className="border-l ml-6 border-slate-700">
								<Link
									to="/"
									className="block w-full py-2 pl-3 relative text-slate-400 before:h-3 before:w-3 before:absolute before:bg-slate-700 before:rounded-full before:block  before:-left-[6.5px] before:border-4 before:border-slate-800 inline-flex items-center rounded-md hover:bg-slate-900 hover:text-purple-500 transition-colors duration-1000"
								>
									Perfiles
								</Link>
							</li>
						</ul>
					</li>

					<li className="bg-purple-90">
						<Link
							to="/"
							className="inline-flex items-center gap-2 text-slate-400 w-full p-2 rounded-md hover:bg-slate-900 hover:text-purple-500 transition-colors duration-1000"
						>
							<i className="ri-chat-3-line text-purple-500"></i>
							Mensajes
						</Link>
					</li>

					<li className="bg-purple-90">
						<Link
							to="/"
							className="inline-flex items-center gap-2 text-slate-400 w-full p-2 rounded-md hover:bg-slate-900 hover:text-purple-500 transition-colors duration-1000"
						>
							<i className="ri-calendar-line text-purple-500"></i>
							Calendario
						</Link>
					</li>
				</ul>

				<div className="mt-auto">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-slate-400 w-full p-2 rounded-md hover:bg-slate-900 hover:text-purple-500 transition-colors duration-1000"
					>
						<i className="ri-logout-circle-r-line text-purple-500"></i>
						Cerrar sesión
					</Link>
				</div>
			</nav>
		</aside>
	);
};

export default SideBar;
