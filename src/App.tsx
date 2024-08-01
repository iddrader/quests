import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import QuestsList from './components/QuestsList';
import Navbar from './components/Navbar';
import './assets/temp.css';
import { useEffect } from 'react';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import Register from './components/Register';

function App() {
    const user = useSelector((state: RootState) => state.user.value);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(user);
    }, []);

    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/quests" element={<QuestsList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
