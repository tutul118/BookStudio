import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import Books from './Books';
import axios from 'axios';

interface Bookitems {
    items: {
        id: string;
        volumeInfo: {
            title: string;
            author: string;
            publishedDate: string;

        }
        imageLinks: {
            thumbnail: string;
        }
    }
}

export default function Search() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState<Bookitems[]>([]);

    const search = () => {
            axios.get("https://www.googleapis.com/books/v1/volumes?q=${query}")
            .then(res => {
                const dataOfBooks = res.data;
                setBooks(dataOfBooks)
                setQuery('');
                console.log(dataOfBooks)
            })
            .catch(error => {
                console.log(error)
            });

    }










    return (
        <div className="bg-img">
            <div>
                <InputGroup className="search-bar">
                    <Input placeholder="Book Search.." value={query} onChange={(e: any) => setQuery(e.target.value)} />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" onClick={search}>To the Right!</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <div className="bookss">
                {books.map(book => (
                    <Books image={book.items.imageLinks.thumbnail} title={book.items.volumeInfo.title} author={book.items.volumeInfo.author}
                        published={book.items.volumeInfo.publishedDate}
                    />))}
            </div>
        </div>

    )
}