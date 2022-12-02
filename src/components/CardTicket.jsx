import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardTicket = ({ ticket, totalTickets, text }) => {
	const [widget, setWidget] = useState(false);

	const handleHideWidget = () => setWidget(!widget);

	let status = '';
	switch (ticket) {
		case 'pending':
			status = 'bg-yellow-500/5 text-yellow-500';
			break;

		case 'process':
			status = 'bg-purple-50 text-purple-500';
			break;

		case 'close':
			status = 'bg-green-50 text-green-500';
			break;

		case 'total':
		default:
			status = 'bg-blue-50 text-blue-500';
			break;
	}

	return (
		<div className="p-8 bg-slate-800 rounded-md">
			<div className="flex items-center justify-between">
				<span className={`inline-block p-4 ${status} box-content rounded-md`}>
					<i className="ri-ticket-line text-4xl"></i>
				</span>

				<button
					onClick={handleHideWidget}
					className="relative ml-auto relative py-2 px-3 hover:bg-slate-900 rounded-lg transition-colors duration-500"
				>
					<i className="ri-more-2-line text-2xl"></i>

					{/* Submenu */}
					<ul
						className={`absolute right-0 w-max mt-5 bg-slate-700 ${
							widget ? 'h-min -scale-y-1 z-50' : 'h-0 scale-y-0 '
						} transition-[height, transform] duration-150 flex flex-col gap-2 py-3 px-4 rounded-md cursor-default`}
					>
						<li>
							<Link
								to="/"
								className="block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md"
							>
								<div className="w-full flex flex-col items-start">
									Show tickets
								</div>
							</Link>
						</li>

						<li>
							<Link
								to="/"
								className="block py-2 px-4 hover:bg-slate-900 transition-colors rounded-md"
							>
								<div className="w-full flex flex-col items-start">
									Information
								</div>
							</Link>
						</li>
					</ul>
				</button>
			</div>

			<div className="mt-4">
				<h2 className="text-4xl mb-2">{totalTickets}</h2>
				<span className={`${status} py-1 px-2 text-sm rounded-md`}>{text}</span>
			</div>
			{/* NUMBER OF TICKETS */}

			<hr className="border-dashed border-slate-600 my-3" />

			<div>
				<Link
					to="/"
					className={`inline-flex items-center gap-2 hover:underline transition-colors`}
				>
					<i className="ri-add-circle-line mb-[5px]"></i>
					Add new ticket
				</Link>
			</div>
		</div>
	);
};

export default CardTicket;
