import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();//funcion para manejar formularios
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();//funcion para manejar la autenticacion
    const navigate = useNavigate();//funcion para redirigir a otra pagina

    useEffect(() => {
        if (isAuthenticated) navigate('/');//si el usuario esta autenticado, redirige a la pagina principal
    }, [isAuthenticated, navigate]);

    const onSubmit = handleSubmit(async (values) => {
        await signup(values);
    });
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {
                RegisterErrors.map((error, i) => (
                    <div key={i} className="bg-red-500 text-white p-2 mb-2 rounded">
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit} className="flex flex-col items-center justify-center w-96 p-6 bg-zinc-800 rounded-lg shadow-md">
                <input type="text" placeholder="Username" {...register("username", { required: true })} />
                {errors.username && <span className="text-red-500">Username is required</span>}
                <input type="email" name="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-500">Email is required</span>}
                <input type="password" name="password" placeholder="Password" {...register("password", { required: true })} />
                {errors.password && <span className="text-red-500">Password is required</span>}
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                    Registrar
                </button>
            </form>
        </div>
    )
}

export default RegisterPage