import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleHidePassword = () => setShowPassword(!showPassword);

	return (
		<div className="w-full max-w-md bg-slate-800 p-6 rounded-md shadow-2xl">
			<h1 className="text-3xl text-center uppercase tracking-[4px]">
				Crear <span className="text-purple-500">cuenta</span>
			</h1>

			<form action="#" className="py-6 px-2">
				<a
					href="#"
					className="w-full inline-flex items-center justify-center gap-4 bg-slate-900 p-3 rounded-md text-purple-500"
				>
					<img
						src="/assets/image/google.svg"
						alt="Google"
						className="h-5 w-5"
					/>
					Registrate con Google
				</a>

				<div className="mt-7 relative">
					<i className="ri-user-line absolute top-1/2 -translate-y-1/2 left-2 text-purple-400"></i>
					<input
						type="text"
						name="name"
						id="name"
						className="w-full py-3 pr-3 pl-8 rounded-md bg-slate-900 outline-none"
						placeholder="Nombre(s)"
					/>
				</div>

				<div className="mt-4 relative">
					<i className="ri-user-line absolute top-1/2 -translate-y-1/2 left-2 text-purple-400"></i>
					<input
						type="text"
						name="lastname"
						id="lastname"
						className="w-full py-3 pr-3 pl-8 rounded-md bg-slate-900 outline-none"
						placeholder="Apellidos"
					/>
				</div>

				<div className="mt-4 relative">
					<i className="ri-mail-line absolute top-1/2 -translate-y-1/2 left-2 text-purple-400"></i>
					<input
						type="email"
						name="email"
						id="email"
						className="w-full py-3 pr-3 pl-8 rounded-md bg-slate-900 outline-none"
						placeholder="Correo electrónico"
					/>
				</div>

				<div className="mt-4 relative">
					<i className="ri-lock-line absolute top-1/2 -translate-y-1/2 left-2 text-purple-400"></i>

					<input
						type={showPassword ? 'text' : 'password'}
						name="repassword"
						id="repassword"
						className="w-full py-3 px-8 rounded-md bg-slate-900 outline-none"
						placeholder="Contraseña"
					/>

					<i
						onClick={handleHidePassword}
						className={`${
							showPassword ? 'ri-eye-off-line' : 'ri-eye-line'
						} absolute top-1/2 -translate-y-1/2 right-2 text-purple-400 hover:cursor-pointer`}
					></i>
				</div>

				<div className="mt-4 relative">
					<i className="ri-lock-line absolute top-1/2 -translate-y-1/2 left-2 text-purple-400"></i>

					<input
						type={showPassword ? 'text' : 'password'}
						name="password"
						id="password"
						className="w-full py-3 px-8 rounded-md bg-slate-900 outline-none"
						placeholder="Confirmar contraseña"
					/>

					<i
						onClick={handleHidePassword}
						className={`${
							showPassword ? 'ri-eye-off-line' : 'ri-eye-line'
						} absolute top-1/2 -translate-y-1/2 right-2 text-purple-400 hover:cursor-pointer`}
					></i>
				</div>

				<div className="mt-5">
					<button
						type="submit"
						className="w-full inline-flex justify-center items-center py-3 px-8 bg-purple-500 rounded-md hover:bg-purple-600 transition-colors duration-1000 hover:shadow-xl uppercase"
					>
						Registrarme
					</button>
				</div>
			</form>

			<div className="text-center">
				<p>
					¿Ya tienes cuenta?{' '}
					<Link
						to="/auth"
						className="text-purple-400 hover:text-purple-500  transition-colors"
					>
						Ingresar
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
