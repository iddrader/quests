import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setUser } from '../features/user/userSlice';
import WindowIcon from '@mui/icons-material/Window';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import '../assets/scss/navbar.scss';

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
            {user ? (
                <ul>
                    <li className="navbar-icon active">
                        <Link to="">
                            <WindowIcon sx={{ color: 'white' }} />
                        </Link>
                    </li>
                    <li className="navbar-icon">
                        <Link to="quests">
                            <FormatListBulletedIcon sx={{ color: 'white' }} />
                        </Link>
                    </li>
                    <li className="navbar-icon">
                        <AccountBoxIcon sx={{ color: 'white' }} />
                    </li>
                    <li
                        onClick={handleLogout}
                        className="navbar-icon"
                        style={{ marginTop: 'auto' }}
                    >
                        <Link to="/login">
                            <LogoutIcon sx={{ color: 'white' }} />
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li className="navbar-icon active">
                        <Link to="/login">
                            <LoginIcon sx={{ color: 'white' }} />
                        </Link>
                    </li>
                    {/* FIXME change icon to register */}
                    <li className="navbar-icon">
                        <Link to="/register">
                            <LoginIcon sx={{ color: 'white' }} />
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
