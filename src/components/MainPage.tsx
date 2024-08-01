import { useNavigate } from 'react-router-dom';
import CharacterModule from './CharacterModule';
import Chat from './Chat';
import CurrentQuests from './CurrentQuests';
import PopularQuests from './PopularQuests';
import RecentQuests from './RecentQuests';
import Statistics from './Statistics';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const MainPage = () => {
    const user = useSelector((state: RootState) => state.user.value);
    const navigate = useNavigate();

    useEffect(() => {
        if (user == null) navigate('/login');
    }, []);

    return (
        <div className="main-page">
            <CharacterModule />
            <PopularQuests />
            <RecentQuests />
            <CurrentQuests />
            <Statistics />
            <Chat />
        </div>
    );
};

export default MainPage;
