import { useEffect, useState } from 'react';
import { IQuest } from '../types';
import { supabase } from '../supabase';

const getQuests = async () => {
    const { data, error } = await supabase.from('quests').select('title');
    if (!error) return data;

    console.log(error);
    return;
};

const PopularQuests = () => {
    const [quests, setQuests] = useState<IQuest[]>([]);

    useEffect(() => {
        getQuests().then((response) => setQuests(response));
    }, []);
    return (
        <div className="popular">
            <h2 className="tile-title">Popular quests</h2>
            {quests.map((quest) => (
                <div className="quest-tile">{quest.title}</div>
            ))}
        </div>
    );
};

export default PopularQuests;
