import { Tab, Disclosure, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Support = () => {
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
							<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 bg-slate-800 p-6 rounded-md">
								<div className="lg:col-span-3">
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
															className="font-bold text-xl hover:text-blue-500 bold"
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
															className="font-bold text-xl hover:text-blue-500 bold"
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
															className="font-bold text-xl hover:text-blue-500 bold"
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
															className="font-bold text-xl hover:text-blue-500 bold"
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
															className="font-bold text-xl hover:text-blue-500 bold"
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
															className="font-bold text-xl hover:text-blue-500 bold"
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
															className="font-bold text-xl hover:text-blue-500 bold"
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
															className="font-bold text-xl hover:text-blue-500 bold"
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

											<div className="text-xl">
												<nav className="flex items-center justify-center gap-4">
													<button className="py-1 px-2 inline-flex items-center justify-center rounded-md hover:bg-blue-500 transition-colors">
														<i className="ri-arrow-left-s-line"></i>
													</button>

													<div className="flex items-center justify-center gap-4">
														<button className="py-1 px-3 inline-flex items-center justify-center rounded-md hover:bg-blue-500 transition-colors">
															1
														</button>
														<button className="py-1 px-3 inline-flex items-center justify-center rounded-md bg-blue-500 transition-colors">
															2
														</button>
														<button className="py-1 px-3 inline-flex items-center justify-center rounded-md hover:bg-blue-500 transition-colors">
															3
														</button>
														<button className="py-1 px-3 inline-flex items-center justify-center rounded-md hover:bg-blue-500 transition-colors">
															4
														</button>
														<button className="py-1 px-3 inline-flex items-center justify-center rounded-md hover:bg-blue-500 transition-colors">
															5
														</button>
														<button className="py-1 px-3 inline-flex items-center justify-center rounded-md hover:bg-blue-500 transition-colors">
															6
														</button>
													</div>

													<button className="py-1 px-2 inline-flex items-center justify-center rounded-md hover:bg-blue-500 transition-colors">
														<i className="ri-arrow-right-s-line"></i>
													</button>
												</nav>
											</div>
										</div>
									</div>
									{/* CONTENT */}
								</div>
								{/* TITLE: SEARCHER - CONTENT  */}

								<div>
									<div className="bg-blue-50 py-6 px-6 rounded-md mb-8">
										<h2 className="text-xl">More Channels</h2>

										<div className="flex flex-col gap-6 pt-6">
											<div className="flex items-center gap-3">
												<div>
													<i className="ri-file-text-line text-2xl text-blue-500"></i>
												</div>

												<div>
													<h4>Project Briefing</h4>
													<span className="text-sm text-slate-300">
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

											<div className="flex items-center gap-3">
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

											<div className="flex items-center gap-3">
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

											<div className="flex items-center gap-3">
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

									<div className="bg-blue-50 py-6 px-6 rounded-md mb-8">
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

						<Tab.Panel>
							<div className="bg-slate-800 p-8 rounded-md">
								<div className="mb-8">
									<h2 className="text-2xl mb-4">Frequesntly Asked Questions</h2>
									<p className="text-slate-300">
										First, a disclaimer – the entire process of writing a blog
										post often takes more than a couple of hours, even if you
										can type eighty words as per minute and your writing skills
										are sharp
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									<div>
										<h2 className="text-xl">Buying Product</h2>

										<div className="py-4">
											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How does it work?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														Do I need a designer to use Admin Theme ?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														What do I need to do to start selling?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How much does Extended license cost?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>
										</div>
									</div>
									{/* BUYING PRODUCT */}

									<div>
										<h2 className="text-xl">Buying Product</h2>

										<div className="py-4">
											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														What platforms are compatible?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How many people can it support?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How long is the warrianty?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How fast is the installation?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>
										</div>
									</div>
									{/* INSTALLATION */}

									<div>
										<h2 className="text-xl">User Roles</h2>

										<div className="py-4">
											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														What platforms are compatible?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How many people can it support?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How long is the warrianty?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How fast is the installation?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>
										</div>
									</div>
									{/* INSTALLATION */}

									<div>
										<h2 className="text-xl">Reports Generation</h2>

										<div className="py-4">
											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														What platforms are compatible?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How many people can it support?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How long is the warrianty?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>

											<hr className="border-dashed border-slate-600" />

											<Disclosure>
												<Disclosure.Button className="py-4 flex items-center gap-x-2">
													<div className="inline-flex items-center justify-center py-1 px-2 rounded-md bg-slate-700 ui-open:bg-blue-50">
														<i className="ri-arrow-right-s-line ui-open:rotate-90 ui-open:text-blue-500"></i>
													</div>

													<h3 className="text-slate-200 text-left">
														How fast is the installation?
													</h3>
												</Disclosure.Button>

												<Transition
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Disclosure.Panel className="text-gray-500 pl-6 pb-4">
														<p>
															First, a disclaimer – the entire process of
															writing a blog post often takes more than a couple
															of hours, even if you can type eighty words as per
															minute and your writing skills are sharp.
														</p>
													</Disclosure.Panel>
												</Transition>
											</Disclosure>
										</div>
									</div>
									{/* INSTALLATION */}
								</div>
								{/* PRODUCT - INSTALLATION - ROLES - GENERATION */}

								<div className="bg-slate-700 p-8 flex items-center justify-center gap-2 md:gap-6 rounded-md">
									<Link to="/" target="_blank">
										<img
											src="/assets/logo/facebook.svg"
											alt="Facebook"
											className="h-12 w-12"
										/>
									</Link>

									<Link to="/" target="_blank">
										<img
											src="/assets/logo/instagram.svg"
											alt="Instagram"
											className="h-12 w-12"
										/>
									</Link>

									<Link to="/" target="_blank">
										<img
											src="/assets/logo/github.svg"
											alt="Github"
											className="h-12 w-12"
										/>
									</Link>

									<Link to="/" target="_blank">
										<img
											src="/assets/logo/twitter.svg"
											alt="Twitter"
											className="h-12 w-12"
										/>
									</Link>

									<Link to="/" target="_blank">
										<img
											src="/assets/logo/pinterest.svg"
											alt="Pinterest"
											className="h-12 w-12"
										/>
									</Link>

									<Link to="/" target="_blank">
										<img
											src="/assets/logo/dribbble.svg"
											alt="Dribbble"
											className="h-12 w-12"
										/>
									</Link>
								</div>
								{/* NETWORKS */}
							</div>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
};

export default Support;
