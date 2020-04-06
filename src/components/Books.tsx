import React from 'react';

interface Bookprops {
    image: string;
    title: string;
    author: string;
    published: string;
}

export default function Books(props: Bookprops) {
    return (
        <div className="book-section">
            <img className="images" src={props.image} />
            <h3>{props.title} </h3>
            <h4>{props.author}</h4>
            <p>{props.published}</p>



        </div>
    )
}