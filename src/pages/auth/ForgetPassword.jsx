import { Link } from 'react-router-dom';

const ForgetPassword = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-[url('/assets/image/hero.jpg')] bg-no-repeat bg-cover px-2">
			<div className="w-full max-w-md bg-slate-800 p-6 rounded-md shadow-2xl">
				<h1 className="text-3xl text-center uppercase tracking-[4px]">
					Recuperar <span className="text-purple-500">contraseña</span>
				</h1>

				<form action="#" className="py-6 px-2">
					<div className="mt-8 relative">
						<i className="ri-mail-line absolute top-1/2 -translate-y-1/2 left-2 text-purple-400"></i>
						<input
							type="email"
							name="email"
							id="email"
							className="w-full py-3 pr-3 pl-8 rounded-md bg-slate-900 outline-none"
							placeholder="Correo electrónico"
						/>
					</div>

					<div className="mt-5">
						<button
							type="submit"
							className="w-full inline-flex justify-center items-center py-3 px-8 bg-purple-500 rounded-md hover:bg-purple-600 transition-colors duration-1000 hover:shadow-xl uppercase"
						>
							Enviar
						</button>
					</div>
				</form>

				<div className="text-center flex flex-col gap-2">
					<p>
						¿Ya tienes cuenta?{' '}
						<Link
							to="/login"
							className="text-purple-400 hover:text-purple-500  transition-colors"
						>
							Ingresar
						</Link>
					</p>
					<p>
						¿No tienes cuenta?{' '}
						<Link
							to="/registro"
							className="text-purple-400 hover:text-purple-500  transition-colors"
						>
							Registrate
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
