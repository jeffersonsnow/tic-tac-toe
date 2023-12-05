import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing(editing => !editing);
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }

    // let playerName = <span className="player-name">{name}</span>
    //
    // if(isEditing){
    //     playerName = <span className="player-name">{name}</span>
    // }

    return (
        <li className={isActive ? 'active' : undefined}>
              <span className="player">
                {!isEditing && <span className="player-name">{playerName}</span>}
                  {isEditing && <input required value={playerName} onChange={handleChange} />}
                <span className="player-symbol">{symbol}</span>
              </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}