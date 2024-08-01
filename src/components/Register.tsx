import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO create a custom user with quests fields
        const { data, error } = await supabase.auth.signUp({
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
        });

        console.log(data, error);
        if (error) {
            alert('Could not create an account');
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
            <form action="" onSubmit={handleRegister}>
                <label>
                    Email
                    <input type="text" name="username" />
                </label>
                <label>
                    Password
                    <input type="text" name="password" />
                </label>
                <label>
                    Confirm Password
                    <input type="text" name="password-confirm" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;
