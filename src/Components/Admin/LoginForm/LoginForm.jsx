import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginApi } from '../../../api/user';
import { useAuth } from '../../../hooks';


export const LoginForm = () => {

    // console.log(useAuth());
    const {login} = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formValue) => {
            try {
                const response = await loginApi (formValue);
                const {access} = response;
                login(access);
                console.log(access);
            } catch (error) {
                console.log('ERROR');
                console.error(error);
            }
        }
    })

    return (
        <>
        <div className="flex w-1/2 min-h-full flex-col justify-center p-2">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <span className="material-symbols-outlined text-indigo-600 w-full text-center text-5xl">account_circle</span>
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">User login</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div className="mt-2">
                    <input id="name" name="username" type="text" value={formik.values.username} onChange={formik.handleChange} required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input id="password" name="password" type="password" value={formik.values.password} onChange={formik.handleChange} required className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?
                </p>
            </div>
            </div>
        </>
    )
}

const initialValues = () => {
    return {
        username: '',
        password: '',
    };
}

const validationSchema = () => {
    return {
        username: Yup.string().required('true'),
        password: Yup.string().required("inserte una contraseña"),
    }
}