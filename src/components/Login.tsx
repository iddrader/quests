import { supabase } from '../supabase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import { toast } from 'react-toastify';
import '../assets/scss/auth.scss';

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
            toast.error(error.message);
            return error;
        }
        if (data) {
            dispatch(setUser(data.user));
            navigate('/');
            return data;
        }
    };

    return (
        <div className="auth-container">
            <form action="" onSubmit={handleLogin} className="auth-form">
                <h2>Enchanted Errands</h2>
                <p>
                    Reclaim your place in the realm. Enter your sacred chamber
                    to resume your quests and manage your legendary duties.
                </p>
                <input
                    type="text"
                    name="email"
                    placeholder="Inscribe thy email here"
                    required
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Reveal thy secret password"
                    required
                />

                <button type="submit">Enter the realm</button>
                <div className="auth-hr">
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>
                <p className="auth-link">
                    Unregistered adventurer?{' '}
                    <Link to="/register">Enlist now</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
