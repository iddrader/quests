import { useEffect, useState } from 'react';
import { IQuest } from '../types';
import { supabase } from '../supabase';

const getQuests = async () => {
    const { data, error } = await supabase.from('quests').select();
    if (!error) return data;

    console.log(error);
    return;
};

const PopularQuests = () => {
    const [quests, setQuests] = useState<IQuest[] | undefined>([]);

    useEffect(() => {
        getQuests().then((response) => setQuests(response));
    }, []);
    return (
        <div className="popular block">
            <h2 className="block__title">Popular quests</h2>
            {quests?.map((quest) => (
                <div className="block__quest">{quest.title}</div>
            ))}
        </div>
    );
};

export default PopularQuests;
