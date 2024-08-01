import { SyntheticEvent } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
        });
        if (error) {
            alert('Wrong email or password');
            console.log(error);
            return error;
        }
        if (data) {
            dispatch(setUser(data.user));
            navigate('/');
            return data;
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleLogin}>
                <label>
                    Login
                    <input type="text" name="email" />
                </label>
                <label>
                    Password
                    <input type="text" name="password" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
