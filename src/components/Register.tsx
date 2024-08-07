import { supabase } from '../supabase';
import { Link, useNavigate } from 'react-router-dom';
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
        <div className="auth-container">
            <form
                action=""
                onSubmit={handleRegister}
                className="auth-form"
                style={{ gap: '1rem' }}
            >
                <h2>Enchanted Errands</h2>
                <p>
                    Enlist to forge your destiny! Create an account to chronicle
                    your quests, track your triumphs, and seamlessly navigate
                    your journey through our enchanted realm.
                </p>
                <input
                    type="text"
                    name="email"
                    placeholder="Inscribe thy email here"
                />
                <input
                    type="text"
                    name="username"
                    placeholder="@Invent thy heroic title"
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Reveal thy secret password"
                />
                <input
                    type="text"
                    name="password-confirm"
                    placeholder="Echo thy secret password"
                />
                <button type="submit">Enter the realm</button>
                <div className="auth-hr">
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>
                <p className="auth-link">
                    Returning knight?{' '}
                    <Link to="/login">Continue your journey here</Link>.
                </p>
            </form>
        </div>
    );
};

export default Register;
