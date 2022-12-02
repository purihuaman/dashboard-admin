import { Menu } from '@headlessui/react';

import CardTicket from '../../components/CardTicket';

const Home = () => {
	return (
		<div className="p-4">
			<div className="flex flex-col md:flex-row items-center justify-between gap-y-4 py-8">
				<h2 className="text-2xl">Good Morning, Purihuaman</h2>

				<div>
					<button className="inline-flex items-center justify-center py-1 px-2 rounded-md hover:bg-slate-900 transition-colors">
						<i className="ri-arrow-left-s-line text-xl"></i>
					</button>

					<button className="inline-flex items-center justify-center ml-2 py-1 px-2 rounded-md hover:bg-slate-900 transition-colors">
						<i className="ri-arrow-right-s-line text-xl"></i>
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				<CardTicket
					ticket="total"
					totalTickets="145,000"
					text="Total tickets"
				/>

				<CardTicket
					ticket="pending"
					totalTickets="5,000"
					text="Pending tickets"
				/>

				<CardTicket
					ticket="process"
					totalTickets="130,000"
					text="Tickets in process"
				/>

				<CardTicket
					ticket="close"
					totalTickets="10,000"
					text="Closed tickets"
				/>
			</div>
			{/* CONTAINER CARDS */}

			<div className="my-8">
				<h2 className="text-xl">Recent tickets</h2>
			</div>

			<div className="bg-slate-800 p-8 rounded-md">
				<div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 py-4 text-center md:bg-slate-900 rounded-md">
					<h5>ID</h5>
					<h5>Description</h5>
					<h5>Status</h5>
					<h5>Date</h5>
					<h5>Actions</h5>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 py-2 border-b-[1px] border-slate-600 text-center">
					<div>
						<h5 className="mb-2 md:hidden">ID:</h5>
						<p>#141252512</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Description</h5>
						<p className="first-letter:uppercase">reiniciar computadora</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Status</h5>
						<p className="inline-block first-letter:uppercase bg-yellow-500/5 text-yellow-500 py-1 px-3 rounded-md">
							open
						</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Date</h5>
						<p>2/12/2022</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Actions</h5>
						<Menu>
							<span className="relative">
								<Menu.Button
									className="relative ml-auto relative py-2 px-3 hover:bg-slate-900 rounded-lg transition-colors duration-500"
									title="Actions"
								>
									<i className="ri-more-2-line text-2xl"></i>
								</Menu.Button>

								<Menu.Items className="absolute w-max right-full -top-10 mt-5 bg-slate-700 transition-[transform] duration-150 flex flex-col gap-2 py-3 px-4 rounded-md cursor-default">
									<Menu.Item>
										{({ active }) => (
											<a
												className={`${
													active && 'bg-blue-500'
												} block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md`}
												href="/"
											>
												Dashboard
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												className={`${
													active && 'bg-blue-500'
												} block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md`}
												href="/"
											>
												Information
											</a>
										)}
									</Menu.Item>
								</Menu.Items>
							</span>
						</Menu>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 py-2 border-b-[1px] border-slate-600 text-center">
					<div>
						<h5 className="mb-2 md:hidden">ID:</h5>
						<p>#141252512</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Description:</h5>
						<p className="first-letter:uppercase">reiniciar computadora</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Status:</h5>
						<p className="inline-block first-letter:uppercase bg-purple-50 text-purple-500 py-1 px-3 rounded-md">
							process
						</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Date:</h5>
						<p>2/12/2022</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Actions:</h5>
						<Menu>
							<span className="relative">
								<Menu.Button
									className="relative ml-auto relative py-2 px-3 hover:bg-slate-900 rounded-lg transition-colors duration-500"
									title="Actions"
								>
									<i className="ri-more-2-line text-2xl"></i>
								</Menu.Button>

								<Menu.Items className="absolute w-max right-full -top-10 mt-5 bg-slate-700 transition-[transform] duration-150 flex flex-col gap-2 py-3 px-4 rounded-md cursor-default">
									<Menu.Item>
										{({ active }) => (
											<a
												className={`${
													active && 'bg-blue-500'
												} block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md`}
												href="/"
											>
												Dashboard
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												className={`${
													active && 'bg-blue-500'
												} block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md`}
												href="/"
											>
												Information
											</a>
										)}
									</Menu.Item>
								</Menu.Items>
							</span>
						</Menu>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 py-2 border-b-[1px] border-slate-600 text-center">
					<div>
						<h5 className="mb-2 md:hidden">ID:</h5>
						<span>#141252512</span>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Description:</h5>
						<p className="first-letter:uppercase">reiniciar computadora</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Status:</h5>
						<p className="inline-block first-letter:uppercase bg-green-50 text-green-500 py-1 px-3 rounded-md">
							closed
						</p>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Date:</h5>
						<span>2/12/2022</span>
					</div>
					<div>
						<h5 className="mb-2 md:hidden">Actions:</h5>
						<Menu>
							<span className="relative">
								<Menu.Button
									className="relative ml-auto relative py-2 px-3 hover:bg-slate-900 rounded-lg transition-colors duration-500"
									title="Actions"
								>
									<i className="ri-more-2-line text-2xl"></i>
								</Menu.Button>

								<Menu.Items className="absolute w-max right-full -top-10 mt-5 bg-slate-700 transition-[transform] duration-150 flex flex-col gap-2 py-3 px-4 rounded-md cursor-default">
									<Menu.Item>
										{({ active }) => (
											<a
												className={`${
													active && 'bg-blue-500'
												} block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md`}
												href="/"
											>
												Dashboard
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												className={`${
													active && 'bg-blue-500'
												} block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md`}
												href="/"
											>
												Information
											</a>
										)}
									</Menu.Item>
								</Menu.Items>
							</span>
						</Menu>
					</div>
				</div>
			</div>
			{/* TABLE */}
		</div>
	);
};

export default Home;
