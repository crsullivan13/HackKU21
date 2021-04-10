import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Hackit = {
    name: string,
    description: string,
}

const Home = () => {
    const [hackits, setHackits] = useState<Hackit[]>([]);

    const [newHackitName, setNewHackitName] = useState(''); //useState
    const [newHackitDesc, setNewHackitDesc] = useState('');

    const changeName = (event: any) => {
        setNewHackitName(event.target.value);
    }

    const changeDesc = (event: any) => {
        setNewHackitDesc(event.target.value);
    }

    const createHackit = () => {
        setHackits((oldHackits) => [...oldHackits, {
            name: newHackitName,
            description: newHackitDesc,
        }])
    }

    return(
        <div>
            {hackits.map((hackit) => {
                return(
                    <Link to={`/h/${hackit.name}`}>
                        <p>
                            {hackit.name}
                        </p>
                            
                        <p>
                            {hackit.description}
                        </p>
                    </Link>
                )
            })}

            <p>
                Create a hackit!
            </p>
            <p>
                Name:
            </p>
            <input type = "text" value={newHackitName} onChange={changeName} />
            <p>
                Description:
            </p>
            <input type = "text" value={newHackitDesc} onChange={changeDesc} />
            <br/>
            <button onClick={createHackit}>
                Create Hackit
            </button>
        </div>
        
    )
}

export default Home;