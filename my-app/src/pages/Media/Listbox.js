import React from 'react'
import './Music.css'

const Listbox = props => {
   
    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }  

    return (
    <div>
        {
            props.items.map((item, index) =>
            <button key={index}
            className='song-list'
            onClick={clicked}
            id={item.track.id}>
                {item.track.name}
            </button>)
        }
    </div>
  )
}

export default Listbox