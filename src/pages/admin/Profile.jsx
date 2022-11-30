import { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
	const [activeGithub, setActiveGithub] = useState(false);
	const [activeGoogle, setActiveGoogle] = useState(false);
	const [activeSlack, setActiveSlack] = useState(false);

	const handleSubmit = (ev) => {
		ev.preventDefault();
	};

	return (
		<>
			{/* data profile */}
			<div className="px-6 py-6 bg-slate-800 rounded-md mb-8">
				<h2 className="text-xl">Datos personales</h2>

				<hr className="my-3 border-slate-600" />

				<form action="#">
					<div className="flex mb-6">
						<div className="w-1/4">
							<p>Imagen</p>
						</div>

						<div className="flex-1">
							<div className="relative mb-2">
								<label
									htmlFor="file"
									className="absolute -top-1 left-24 px-2 py-1 bg-slate-800 hover:text-blue-500 hover:bg-slate-900 rounded-full transition-colors cursor-pointer"
								>
									<i className="ri-pencil-line"></i>
								</label>
								<img
									src="/assets/image/purihuaman.png"
									alt="Pedro Purihuaman"
									className="w-28 h-28 object-cover rounded-lg bg-slate-200"
								/>

								<input type="file" name="file" id="file" className="hidden" />
							</div>

							<p className="text-slate-300 text-sm">
								Allowed file types: png, jpg, jpeg, webp.
							</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-2 mb-4">
						<div className="md:w-1/4">
							<p className="after:content-['*'] after:text-red-400">
								Nombre completo
							</p>
						</div>

						<div className="md:flex-1 flex flex-col md:flex-row items-center gap-4">
							<div className="w-full">
								<input
									type="text"
									name=""
									id=""
									className="block w-full py-2 px-3 bg-slate-900 rounded-md"
									placeholder="Nombre(s)"
								/>
							</div>

							<div className="w-full">
								<input
									type="text"
									name=""
									id=""
									className="block w-full py-2 px-3 bg-slate-900 rounded-md"
									placeholder="Apellido(s)"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-2 mb-4">
						<div className="md:w-1/4">
							<p className="after:content-['*'] after:text-red-400">
								Nombre de la empresa
							</p>
						</div>

						<div className="md:flex-1">
							<input
								type="text"
								name=""
								id=""
								className="block w-full py-2 px-3 bg-slate-900 rounded-md"
								placeholder="Nombre"
							/>
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-2 mb-4">
						<div className="md:w-1/4 inline-flex items-center gap-2">
							<p className="after:content-['*'] after:text-red-400">
								Número de contacto
							</p>
							<i className="ri-information-line text-slate-400"></i>
						</div>

						<div className="md:flex-1">
							<input
								type="text"
								name=""
								id=""
								className="block w-full py-2 px-3 bg-slate-900 rounded-md"
								placeholder="044 3276 454 935"
							/>
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-2 mb-4">
						<div className="md:w-1/4">
							<p className="after:content-['*'] after:text-red-400">
								Página web
							</p>
						</div>

						<div className="md:flex-1">
							<input
								type="text"
								name=""
								id=""
								className="block w-full py-2 px-3 bg-slate-900 rounded-md"
								placeholder="keenthemes.com"
							/>
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-2 mb-4">
						<div className="w-1/4 inline-flex items-center gap-2">
							<p className="after:content-['*'] after:text-red-400">País</p>
							<i className="ri-information-line text-slate-400"></i>
						</div>

						<div className="flex-1">
							<select
								name="country"
								id="country"
								className="block w-full py-2 px-3 appearance-none bg-slate-900 rounded-md"
							>
								<option value="perú">Perú</option>
								<option value="argentina">Argentina</option>
								<option value="colombia">Colombia</option>
								<option value="venezuela">Venezuela</option>
								<option value="uruguay">Uruguay</option>
								<option value="mexico">México</option>
							</select>
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-2 mb-4">
						<div className="w-1/4 inline-flex items-center gap-2">
							<p className="after:content-['*'] after:text-red-400">Ciudad</p>
							<i className="ri-information-line text-slate-400"></i>
						</div>

						<div className="flex-1">
							<select
								name="country"
								id="country"
								className="block w-full py-2 px-3 appearance-none bg-slate-900 rounded-md"
							>
								<option value="lima">Lima</option>
								<option value="buenos-aires">Buenos aires</option>
								<option value="bogotá">Bogotá</option>
								<option value="caracas">Caracas</option>
								<option value="montevideo">Montevideo</option>
								<option value="guadalajara">Guadalajara</option>
							</select>
						</div>
					</div>
				</form>

				<hr className="my-3 border-slate-600" />

				<div className="text-right">
					<button className="py-2 px-4 rounded-md inline-flex items-center bg-blue-500 hover:bg-blue-600 transition-colors">
						Guardar
					</button>
				</div>
			</div>

			{/* password profile */}

			<div className="px-6 py-6 bg-slate-800 rounded-md mb-8">
				<h2 className="text-xl">Usuario y contraseña</h2>

				<hr className="my-3 border-slate-600" />

				<form action="#">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-y-2 mb-4">
						<div className="">
							<h4 className="text-xl">Correo electrónico</h4>
							<p className="text-slate-300">pedroppurihuaman@gmail.com</p>
						</div>

						<div>
							<button className="w-full py-2 px-4 rounded-md inline-flex items-center justify-center text-slate-300 bg-slate-600 hover:bg-blue-800 hover:text-blue-300 transition-colors">
								Cambiar email
							</button>
						</div>
					</div>

					<hr className="my-3 border-slate-600" />

					<div className="flex flex-col md:flex-row md:items-center justify-between gap-y-2">
						<div>
							<h4 className="text-xl">Contraseña</h4>
							<p className="text-slate-300">*************</p>
						</div>

						<div>
							<button className="w-full py-2 px-4 rounded-md inline-flex items-center justify-center text-slate-300 bg-slate-600 hover:bg-blue-800 hover:text-blue-300 transition-colors">
								Cambiar contraseña
							</button>
						</div>
					</div>
				</form>

				<div className="flex flex-col md:flex-row gap-8 items-center justify-between mt-8 border border-dashed p-4 border-blue-500 bg-blue-50 rounded-md text-center md:text-left">
					<div className="inline-flex flex-col md:flex-row items-center gap-4">
						<p className="text-4xl text-blue-500">
							<i className="ri-shield-check-fill"></i>
						</p>

						<div>
							<h3 className="text-xl mb-2">Asegure su cuenta</h3>
							<p className="text-slate-300">
								Two-factor authentication adds an extra layer of security to
								your account. To log in, in addition you'll need to provide a 6
								digit code.
							</p>
						</div>
					</div>

					<div>
						<button className="py-2 px-4 rounded-md inline-flex items-center bg-blue-500 hover:bg-blue-600 transiton-colors">
							Activar
						</button>
					</div>
				</div>
			</div>

			{/* Connected accounts */}

			<div className="px-6 py-6 bg-slate-800 rounded-md mb-8">
				<h2 className="text-xl">Conectar con cuentas</h2>

				<hr className="my-3 border-slate-600" />

				<div className="flex flex-col md:flex-row items-center gap-6 mt-8 border border-dashed p-4 border-blue-500 bg-blue-50 rounded-md mb-6 text-center md:text-left">
					<p className="text-4xl text-blue-500">
						<i className="ri-rotate-lock-line"></i>
					</p>

					<p className="text-slate-300">
						Two-factor authentication adds an extra layer of security to your
						account. To log in, in you'll need to provide a 4 digit amazing
						code.{' '}
						<Link to="/" className="text-blue-500 hover:underline">
							Learn More
						</Link>
					</p>
				</div>

				<form action="#" onSubmit={handleSubmit}>
					<div className="flex items-center justify-between mb-4">
						<div className="inline-flex items-center gap-8">
							<div>
								<img
									src="/assets/image/google.svg"
									alt="Google"
									className="h-10 w-10"
								/>
							</div>

							<div>
								<Link to="/">
									<h4 className="hover:text-blue-500 transiton-colors">
										Google
									</h4>
								</Link>
								<p className="text-slate-300">Plan properly your workflow</p>
							</div>
						</div>

						<div className="">
							<button
								onClick={() => setActiveGoogle(!activeGoogle)}
								className=""
							>
								<i
									className={`text-5xl transition-all ${
										activeGoogle
											? 'ri-toggle-line text-slate-300'
											: 'ri-toggle-fill text-blue-500'
									}`}
								></i>
							</button>
						</div>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="flex items-center justify-between">
						<div className="inline-flex items-center gap-6">
							<div>
								<img
									src="/assets/image/github.svg"
									alt="Github"
									className="h-10 w-10 bg-slate-200 rounded-lg"
								/>
							</div>

							<div>
								<Link to="/">
									<h4 className="hover:text-blue-500 transiton-colors">
										Github
									</h4>
								</Link>
								<p className="text-slate-300">
									Keep eye on on your Repositories
								</p>
							</div>
						</div>

						<div className="">
							<button
								onClick={() => setActiveGithub(!activeGithub)}
								className=""
							>
								<i
									className={`text-5xl transition-all ${
										activeGithub
											? 'ri-toggle-line text-slate-300'
											: 'ri-toggle-fill text-blue-500'
									}`}
								></i>
							</button>
						</div>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="flex items-center justify-between">
						<div className="inline-flex items-center gap-6">
							<div>
								<img
									src="/assets/image/slack.svg"
									alt="Slack"
									className="h-10 w-10"
								/>
							</div>

							<div>
								<Link to="/">
									<h4 className="hover:text-blue-500 transiton-colors">
										Slack
									</h4>
								</Link>
								<p className="text-slate-300">
									Keep eye on on your Repositories
								</p>
							</div>
						</div>

						<div className="">
							<button onClick={() => setActiveSlack(!activeSlack)} className="">
								<i
									className={`text-5xl transition-all ${
										activeSlack
											? 'ri-toggle-line text-slate-300'
											: 'ri-toggle-fill text-blue-500'
									}`}
								></i>
							</button>
						</div>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="text-right">
						<button className="py-2 px-4 rounded-md inline-flex items-center bg-slate-700 mr-4 hover:bg-slate-800 transition-colors">
							Descartar
						</button>

						<button className="py-2 px-4 rounded-md inline-flex items-center bg-blue-500 hover:bg-blue-600 transition-colors">
							Guardar cambios
						</button>
					</div>
				</form>
			</div>

			{/* Email preferences */}

			<div className="px-6 py-6 bg-slate-800 rounded-md mb-8">
				<h2 className="text-xl">Preferencias de correo electrónico</h2>

				<hr className="my-3 border-slate-600" />

				<form action="#" onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="payments" className="flex items-start gap-8">
							<input
								type="checkbox"
								name="payments"
								id="payments"
								className="accent-blue-500 hover:accent-blue-400 h-5 w-5 mt-2"
							/>

							<span>
								<h3>Successful Payments</h3>
								<p className="text-slate-300">
									Receive a notification for every successful payment.
								</p>
							</span>
						</label>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="mb-4">
						<label htmlFor="payouts" className="flex items-start gap-8">
							<input
								type="checkbox"
								name="payouts"
								id="payouts"
								className="accent-blue-500 hover:accent-blue-400 h-5 w-5 mt-2"
							/>
							<span>
								<h3>Payouts</h3>
								<p className="text-slate-300">
									Receive a notification for every initiated payout.
								</p>
							</span>
						</label>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="mb-4">
						<label htmlFor="fee-collection" className="flex items-start gap-8">
							<input
								type="checkbox"
								name="fee-collection"
								id="fee-collection"
								className="accent-blue-500 hover:accent-blue-400 h-5 w-5 mt-2"
							/>

							<span>
								<h3>Fee Collection</h3>
								<p className="text-slate-300">
									Receive a notification each time you collect a fee from sales
								</p>
							</span>
						</label>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="mb-4">
						<label
							htmlFor="customer-payments"
							className="flex items-start gap-8"
						>
							<input
								type="checkbox"
								name="customer-payments"
								id="customer-payments"
								className="accent-blue-500 hover:accent-blue-400 h-5 w-5 mt-2"
							/>

							<span>
								<h3>Customer Payment Dispute</h3>
								<p className="text-slate-300">
									Receive a notification if a payment is disputed by a customer
									and for dispute purposes.
								</p>
							</span>
						</label>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="mb-4">
						<label htmlFor="refund-alerts" className="flex items-start gap-8">
							<input
								type="checkbox"
								name="refund-alerts"
								id="refund-alerts"
								className="accent-blue-500 hover:accent-blue-400 h-5 w-5 mt-2"
							/>

							<span>
								<h3>Refund Alerts</h3>
								<p className="text-slate-300">
									Receive a notification if a payment is stated as risk by the
									Finance Department.
								</p>
							</span>
						</label>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="mb-4">
						<label
							htmlFor="invoice-payments"
							className="flex items-start gap-8"
						>
							<input
								type="checkbox"
								name="invoice-payments"
								id="invoice-payments"
								className="accent-blue-500 hover:accent-blue-400 h-5 w-5 mt-2"
							/>

							<span>
								<h3>Invoice Payments</h3>
								<p className="text-slate-300">
									Receive a notification if a customer sends an incorrect amount
									to pay their invoice.
								</p>
							</span>
						</label>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="mb-4">
						<label htmlFor="webhook" className="flex items-start gap-8">
							<input
								type="checkbox"
								name="webhook"
								id="webhook"
								className="accent-blue-500 hover:accent-blue-400 h-5 w-5 mt-2"
							/>

							<span>
								<h3>Webhook API Endpoints</h3>

								<p className="text-slate-300">
									Receive notifications for consistently failing webhook API
									endpoints.
								</p>
							</span>
						</label>
					</div>

					<hr className="my-3 border-dashed border-slate-600" />

					<div className="text-right">
						<button className="py-2 px-4 rounded-md inline-flex items-center bg-slate-700 mr-4 hover:bg-slate-800 transition-colors">
							Descartar
						</button>

						<button className="py-2 px-4 rounded-md inline-flex items-center bg-blue-500 hover:bg-blue-600 transition-colors">
							Guardar cambios
						</button>
					</div>
				</form>
			</div>

			{/* Inactive account */}

			<div className="px-6 py-6 bg-slate-800 rounded-md mb-8">
				<h2 className="text-xl">Conectar con cuentas</h2>

				<hr className="my-3 border-slate-600" />

				<div className="flex flex-col md:flex-row items-center gap-6 mt-8 border border-dashed p-4 border-yellow-500 bg-yellow-900/10 rounded-md mb-6 text-center md:text-left">
					<p className="text-4xl text-yellow-500">
						<i className="ri-error-warning-line"></i>
					</p>

					<div>
						<h3>You Are Deactivating Your Account</h3>

						<p className="text-slate-300">
							For extra security, this requires you to confirm your email or
							phone number when you reset yousignr password.
							<br />
							<Link to="/" className="font-bold text-blue-500 hover:underline">
								Learn More
							</Link>
						</p>
					</div>
				</div>

				<form action="#" onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="confirm" className="flex items-start gap-4 py-2">
							<input
								type="checkbox"
								name="confirm"
								id="confirm"
								className="accent-blue-500 hover:accent-blue-400 h-5 w-5"
							/>

							<p className="text-slate-300">
								I confirm my account deactivation
							</p>
						</label>
					</div>

					<hr className="my-3  border-slate-600" />

					<div className="text-right">
						<button className="py-2 px-4 rounded-md inline-flex items-center bg-red-500 hover:bg-red-600 transition-colors">
							Desactivar cuenta
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Profile;
