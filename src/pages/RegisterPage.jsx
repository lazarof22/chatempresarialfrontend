import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form action="" onSubmit={handleSubmit(async (values) => {
                const res = await registerRequest(values);
            })}
                className="flex flex-col items-center justify-center w-96 p-6 bg-zinc-800 rounded-lg shadow-md">
                <input type="text" placeholder="Username" {...register("username", { required: true })} />
                <input type="email" name="email" placeholder="Email" {...register("email", { required: true })} />
                <input type="password" name="password" placeholder="Password" {...register("password", { required: true })} />
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                    Registrar
                </button>
            </form>
        </div>
    )
}

export default RegisterPage