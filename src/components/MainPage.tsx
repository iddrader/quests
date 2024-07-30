import CharacterModule from './CharacterModule';
import Chat from './Chat';
import CurrentQuests from './CurrentQuests';
import PopularQuests from './PopularQuests';
import RecentQuests from './RecentQuests';
import Statistics from './Statistics';

const MainPage = () => {
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
