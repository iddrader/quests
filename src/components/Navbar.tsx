import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setUser } from '../features/user/userSlice';

const Navbar = () => {
    const user = useSelector((state: RootState) => state.user.value);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) return error;
        dispatch(setUser(null));
    };
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="">Main page</Link>
                </li>
                <li>
                    <Link to="quests">Quests</Link>
                </li>
                <li>Profile</li>
                <li onClick={handleLogout}>
                    <Link to="/login">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
