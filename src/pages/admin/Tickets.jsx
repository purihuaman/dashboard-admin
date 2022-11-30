import { Tab, Disclosure, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Tickets = () => {
	const handleSelect = (ev) => {
		console.log(ev.target);
		ev.target.classList.add('active');
	};

	return (
		<div>
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
				<div>
					<h2 className="text-xl mb-2">Overview</h2>

					<div className="text-slate-300 text-sm">
						<Link to="/" className="hover:text-blue-500">
							Home
						</Link>
						<span> - </span>
						<span>Support center</span>
					</div>
				</div>

				<div className="flex gap-3">
					<button className="inline-flex items-center justify-between gap-2 py-2 px-4 rounded-md bg-slate-800 hover:text-blue-500 transition-colors">
						<i className="ri-filter-line"></i> Filter
					</button>

					<button className="inline-flex items-center justify-between gap-2 py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors">
						Create
					</button>
				</div>
			</div>

			{/* portada */}
			<div className="p-8 bg-slate-800 rounded-tl-md rounded-tr-md">
				<div className="flex items-center justify-around gap-8 p-8">
					<div className="p-6">
						<h2 className="text-3xl mb-6">How Can We Help You?</h2>

						<form action="">
							<span className="block relative">
								<i className="ri-search-line absolute left-2 top-1/2  -translate-y-1/2 text-blue-500"></i>
								<input
									type="text"
									placeholder="Ash a question"
									className="w-full py-2 pl-8 rounded-md bg-slate-800 border border-slate-600"
								/>
							</span>
						</form>
					</div>

					<div>
						<img
							src="/assets/image/support.svg"
							alt="Support"
							className="w-72 h-72 object-cover"
						/>
					</div>
				</div>
			</div>

			<div>
				<Tab.Group>
					<Tab.List className="p-6 rounded-bl-md rounded-br-md bg-slate-800">
						<div className="p-6 flex flex-col md:flex-row items-center gap-4 bg-slate-700 rounded-md">
							<div className="w-full flex flex-col md:flex-row items-center gap-4">
								<Tab className="w-full inline-flex items-center justify-center py-2 px-4 uppercase text-sm rounded-md outline-none hover:bg-slate-600 hover:text-blue-500 ui-selected:text-blue-500 ui-selected:bg-slate-600 transition-colors">
									OVERVIEW
								</Tab>

								<Tab className="w-full inline-flex items-center justify-center py-2 px-4 uppercase text-sm rounded-md outline-none hover:bg-slate-600 hover:text-blue-500 ui-selected:text-blue-500 ui-selected:bg-slate-600 transition-colors">
									TICKETS
								</Tab>

								<Tab className="w-full inline-flex items-center justify-center py-2 px-4 uppercase text-sm rounded-md outline-none hover:bg-slate-600 hover:text-blue-500 ui-selected:text-blue-500 ui-selected:bg-slate-600 transition-colors">
									FAQ
								</Tab>

								<Tab className="w-full inline-flex items-center justify-center py-2 px-4 uppercase text-sm whitespace-nowrap rounded-md outline-none hover:bg-slate-600 hover:text-blue-500 ui-selected:text-blue-500 ui-selected:bg-slate-600 transition-colors">
									CONTACT US
								</Tab>
							</div>

							<div className="w-full md:w-auto md:ml-auto">
								<button className="w-full inline-flex items-center justify-center py-2 px-4 uppercase text-sm whitespace-nowrap rounded-md outline-none bg-blue-500 hover:bg-blue-600 transition-colors">
									Create Ticket
								</button>
							</div>
						</div>
					</Tab.List>

					<Tab.Panels className="mt-6">
						<Tab.Panel>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{/* tickets popular */}
								<div className="bg-slate-800 p-6 rounded-md">
									<div className="flex items-center justify-between">
										<div>
											<h2 className="text-xl">Popular Tickets</h2>
										</div>

										<div>
											<Link
												to="/tickets"
												className="inline-flex items-center gap-2 text-blue-500 font-bold text-sm hover:text-blue-400"
											>
												Support <i className="ri-arrow-right-line"></i>
											</Link>
										</div>
									</div>

									{/* Toggle */}
									<div className="mt-8">
										<Disclosure>
											<Disclosure.Button className="py-2 flex items-center gap-x-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div className="flex items-center gap-4">
													<h3>What admin theme does?</h3>
													<span className="py-1 px-2 text-sm rounded-md text-slate-400 bg-slate-700">
														React
													</span>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															Check Out
														</Link>
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="py-2 flex items-center gap-x-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div className="flex items-center gap-4">
													<h3>How Extended Licese works?</h3>
													<span className="py-1 px-2 rounded-md text-slate-400 bg-slate-700 text-sm">
														Laravel
													</span>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															Check Out
														</Link>
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div className="flex items-center gap-4">
													<h3>How to install on a local machine?</h3>
													<span className="py-1 px-2 rounded-md text-slate-400 bg-slate-700 text-sm">
														VueJS
													</span>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															Check Out
														</Link>
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div className="flex items-center gap-4">
													<h3>How can I import Google fonts?</h3>
													<span className="py-1 px-2 rounded-md text-slate-400 bg-slate-700 text-sm">
														Angular 9
													</span>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															Check Out
														</Link>
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div className="flex items-center gap-4">
													<h3>How long the license is valid?</h3>
													<span className="py-1 px-2 rounded-md text-slate-400 bg-slate-700 text-sm">
														Bootstrap 5
													</span>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															Check Out
														</Link>
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div className="flex items-center gap-4">
													<h3>How many end projects I can build?</h3>
													<span className="py-1 px-2 rounded-md text-slate-400 bg-slate-700 text-sm">
														PHP
													</span>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															Check Out
														</Link>
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>
									</div>
								</div>

								{/* faq */}
								<div className="bg-slate-800 p-6 rounded-md">
									<div className="flex items-center justify-between">
										<div>
											<h2 className="text-xl">FAQ</h2>
										</div>

										<div>
											<Link
												to="/tickets"
												className="inline-flex items-center gap-2 text-blue-500 font-bold text-sm hover:text-blue-400"
											>
												Full FAQ <i className="ri-arrow-right-line"></i>
											</Link>
										</div>
									</div>

									{/* Toggle */}
									<div className="mt-8">
										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div>
													<h3>What admin theme does?</h3>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div>
													<h3>How Extended Licese works?</h3>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div className="flex items-center gap-4">
													<h3>How to install on a local machine?</h3>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div>
													<h3>How can I import Google fonts?</h3>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div>
													<h3>How long the license is valid?</h3>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>

										<Disclosure>
											<Disclosure.Button className="flex items-center gap-x-2 py-2">
												<div className="ui-open:rotate-90 ui-open:text-blue-500">
													<i className="ri-arrow-right-s-line"></i>
												</div>

												<div>
													<h3>How many end projects I can build?</h3>
												</div>
											</Disclosure.Button>

											<Transition
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel className="text-gray-500 pl-6">
													<p>
														By Keenthemes to save tons and more to time money
														projects are listed and outstanding
													</p>
												</Disclosure.Panel>
											</Transition>
										</Disclosure>
									</div>
								</div>
							</div>
						</Tab.Panel>
						{/* OVERVIEW */}

						<Tab.Panel>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-800 p-6 rounded-md">
								<div>
									<form>
										<div className="relative">
											<i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"></i>
											<input
												type="text"
												placeholder="Search"
												className="w-full py-2 px-4 pl-10 rounded-md bg-slate-900"
											/>
										</div>
									</form>
									{/* SEARCH */}

									<div>
										<h2 className="text-xl my-6">Public Tickets</h2>

										<div className="flex flex-col gap-8">
											<div className="flex items-center gap-4">
												<div>
													<i className="ri-checkbox-circle-line text-green-600 text-xl"></i>
												</div>

												<div>
													<div>
														<Link
															to="/"
															className="font-bold text-xl hover:text-blue-500"
														>
															How to use Netronic with Django Framework?
														</Link>
														<span className="ml-4 text-xs text-slate-300 py-2 px-3 bg-slate-700 rounded-md">
															React
														</span>
													</div>

													<span className="text-sm text-slate-300">
														By Keenthemes to save tons and more to time money
														projects are listed amazing outstanding projects are
														listed
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-add-circle-line text-yellow-600 text-xl"></i>
												</div>

												<div>
													<div>
														<Link
															to="/"
															className="font-bold text-xl hover:text-blue-500"
														>
															Admin theme npm issue
														</Link>
														<span className="ml-4 text-xs text-slate-300 py-2 px-3 bg-slate-700 rounded-md">
															Angular
														</span>
													</div>

													<span className="text-sm text-slate-300">
														By Keenthemes to save tons and more to time money
														projects
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-checkbox-circle-line text-green-600 text-xl"></i>
												</div>

												<div>
													<div>
														<Link
															to="/"
															className="font-bold text-xl hover:text-blue-500"
														>
															Admin theme authentication to node.js / strapi
															backend
														</Link>
														<span className="ml-4 text-xs text-slate-300 py-2 px-3 bg-slate-700 rounded-md">
															warning
														</span>
													</div>

													<span className="text-sm text-slate-300">
														By Keenthemes to save tons and more to time money
														projects
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-checkbox-circle-line text-green-600 text-xl"></i>
												</div>

												<div>
													<div>
														<Link
															to="/"
															className="font-bold text-xl hover:text-blue-500"
														>
															How to use Admin theme with Django Framework?
														</Link>
														<span className="ml-4 text-xs text-slate-300 py-2 px-3 bg-slate-700 rounded-md">
															HTML
														</span>
													</div>

													<span className="text-sm text-slate-300">
														By Keenthemes to save tons and more to time money
														projects are listed amazing outstanding projects are
														listed
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-add-circle-line text-yellow-600 text-xl"></i>
												</div>

												<div>
													<div>
														<Link
															to="/"
															className="font-bold text-xl hover:text-blue-500"
														>
															Reducing footprint of Start theme
														</Link>
														<span className="ml-4 text-xs text-slate-300 py-2 px-3 bg-slate-700 rounded-md">
															Angular
														</span>
													</div>

													<span className="text-sm text-slate-300">
														By Keenthemes to save tons and more to time money
														projects
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-checkbox-circle-line text-green-600 text-xl"></i>
												</div>

												<div>
													<div>
														<Link
															to="/"
															className="font-bold text-xl hover:text-blue-500"
														>
															Admin theme node.js / strapi backend
														</Link>
														<span className="ml-4 text-xs text-slate-300 py-2 px-3 bg-slate-700 rounded-md">
															React
														</span>
													</div>

													<span className="text-sm text-slate-300">
														By Keenthemes to save tons and more to time money
														projects are listed amazing outstanding projects are
														listed
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-add-circle-line text-yellow-600 text-xl"></i>
												</div>

												<div>
													<div>
														<Link
															to="/"
															className="font-bold text-xl hover:text-blue-500"
														>
															Admin theme npm issue
														</Link>
														<span className="ml-4 text-xs text-slate-300 py-2 px-3 bg-slate-700 rounded-md">
															View
														</span>
													</div>

													<span className="text-sm text-slate-300">
														By Keenthemes to save tons and more to time money
														projects
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-checkbox-circle-line text-green-600 text-xl"></i>
												</div>

												<div>
													<div>
														<Link
															to="/"
															className="font-bold text-xl hover:text-blue-500"
														>
															How to use Admin theme with Django Framework?
														</Link>
														<span className="ml-4 text-xs text-slate-300 py-2 px-3 bg-slate-700 rounded-md">
															PHP
														</span>
													</div>

													<span className="text-sm text-slate-300">
														By Keenthemes to save tons and more to time money
														projects are listed amazing outstanding projects are
														listed
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">navegación</div>
										</div>
									</div>
									{/* CONTENT */}
								</div>
								{/* TITLE: SEARCHER - CONTENT  */}

								<div className="lg:px-8">
									<div className="bg-blue-50 py-6 px-10 rounded-md mb-8 md:w-[80%] mx-auto">
										<h2 className="text-xl">More Channels</h2>

										<div className="flex flex-col gap-6 pt-6">
											<div className="flex items-center gap-4">
												<div>
													<i className="ri-booklet-line text-2xl text-blue-500"></i>
												</div>

												<div>
													<h4>Project Briefing</h4>
													<span className="text-sm whitespace-nowrap text-slate-300">
														Check out our{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															Support Policy
														</Link>
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-chat-1-line text-2xl text-blue-500"></i>
												</div>

												<div>
													<h4>More to discuss?</h4>
													<span className="text-sm text-slate-300">
														Email us to{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															support@example.com
														</Link>
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-twitter-line text-2xl text-blue-500"></i>
												</div>

												<div>
													<h4>Latest News</h4>
													<span className="text-sm text-slate-300">
														Follow us at{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															Anonimos Twitter
														</Link>
													</span>
												</div>
											</div>

											<div className="flex items-center gap-4">
												<div>
													<i className="ri-github-line text-2xl text-blue-500"></i>
												</div>

												<div>
													<h4>Github Access</h4>
													<span className="text-sm text-slate-300">
														Our github repo{' '}
														<Link
															to="/"
															className="font-bold text-blue-500 hover:text-blue-400"
														>
															Anonimos Github
														</Link>
													</span>
												</div>
											</div>
										</div>
									</div>

									<div className="bg-blue-50 py-6 px-10 rounded-md mb-8 md:w-[80%] mx-auto">
										<h2 className="text-xl">Documentation</h2>

										<div className="flex flex-col gap-6 pt-6">
											<div className="inline-flex items-center gap-4 text-xl">
												<i className="ri-arrow-right-s-line text-slate-300"></i>
												<Link
													to="/"
													className="whitespace-nowrap hover:text-blue-500"
												>
													Angular Admin
												</Link>
											</div>

											<div className="inline-flex items-center gap-4 text-xl">
												<i className="ri-arrow-right-s-line text-slate-300"></i>
												<Link
													to="/"
													className="whitespace-nowrap hover:text-blue-500"
												>
													React Admin
												</Link>
											</div>

											<div className="inline-flex items-center gap-4 text-xl">
												<i className="ri-arrow-right-s-line text-slate-300"></i>
												<Link
													to="/"
													className="whitespace-nowrap hover:text-blue-500"
												>
													Vue Dashboard
												</Link>
											</div>

											<div className="inline-flex items-center gap-4 text-xl">
												<i className="ri-arrow-right-s-line text-slate-300"></i>
												<Link
													to="/"
													className="whitespace-nowrap hover:text-blue-500"
												>
													Niche Theme
												</Link>
											</div>

											<div className="inline-flex items-center gap-4 text-xl">
												<i className="ri-arrow-right-s-line text-slate-300"></i>
												<Link
													to="/"
													className="whitespace-nowrap hover:text-blue-500"
												>
													Dashboard Admin
												</Link>
											</div>

											<div className="inline-flex items-center gap-4 text-xl">
												<i className="ri-arrow-right-s-line text-slate-300"></i>
												<Link
													to="/"
													className="whitespace-nowrap hover:text-blue-500"
												>
													Dorsey Front-end
												</Link>
											</div>

											<div className="inline-flex items-center gap-4 text-xl">
												<i className="ri-arrow-right-s-line text-slate-300"></i>
												<Link
													to="/"
													className="whitespace-nowrap hover:text-blue-500"
												>
													CRM Admin
												</Link>
											</div>

											<div className="inline-flex items-center gap-4 text-xl">
												<i className="ri-arrow-right-s-line text-slate-300"></i>
												<Link
													to="/"
													className="whitespace-nowrap hover:text-blue-500"
												>
													Admin Dashbaord
												</Link>
											</div>

											<div className="inline-flex items-center gap-4 text-xl">
												<i className="ri-arrow-right-s-line text-slate-300"></i>
												<Link
													to="/"
													className="whitespace-nowrap hover:text-blue-500"
												>
													Intranet Admin
												</Link>
											</div>
										</div>
									</div>
								</div>
								{/* MORE CHANNELS - DOCUMENTATION */}
							</div>
						</Tab.Panel>
						{/* TICKETS */}

						<Tab.Panel>Content 3</Tab.Panel>
						<Tab.Panel>Content 4</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
};

export default Tickets;
