import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/MainPage';
import QuestsList from './components/QuestsList';
import Navbar from './components/Navbar';
import './assets/temp.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: 'quests',
        element: <QuestsList />,
    },
]);

function App() {
    return (
        <div className="container">
            <Navbar />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
