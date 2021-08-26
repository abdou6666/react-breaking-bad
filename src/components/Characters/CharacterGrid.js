import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';
function CharacterGrid({ isLoading, items }) {

    return (
    <div>
            {isLoading && <Spinner/> }
            {items && <section className="cards">{
                items.map((char) => (
                    <CharacterItem key={char.char_id} item={char}/>
                ))}</section>
            }
            
    </div>
            )
}
export default CharacterGrid;
