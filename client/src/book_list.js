import React, { useState, useEffect } from 'react';

const BibleChapter = ({ book, chapter }) => {
    const [verses, setVerse] = useState('');

    useEffect(() => {
        const fetchChapter = async () => {
            const response = await fetch(`https://bible-api.com/${book} ${chapter}`);
            const data = await response.json();
            setVerse(data);
        };

        fetchChapter();
    }, [book, chapter]);

    return (
        <div>
            <h2>{book} {chapter}</h2>
            <p>{verses}</p>
        </div>
    );
};

export default BibleChapter;