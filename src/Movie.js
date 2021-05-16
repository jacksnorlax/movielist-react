import React from 'react';

export default function Movie(props) {
    var stars = [];
    for (var i = 0; i < props.item.rating; i++) {
        stars.push(<img src='star.png' alt='Star'></img>)
    }
    return (
        <li className="list-group-item">
            { props.item.title}
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteMovie(props.item.id)}}>X</button>
            {stars}
        </li>
    )
}