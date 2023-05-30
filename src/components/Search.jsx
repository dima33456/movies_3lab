import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInput = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchValue);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          onSearch(searchValue);
        }
    };
    
    const handleClear = () => {
        setSearchValue('');
    };

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },
        input: {
            padding: 10,
            margin: 10,
            borderRadius: 5,
            border: '2px solid #ccc',
            width: 300,
            fontSize: 16,
        },
        button: {
            padding: 10,
            margin: 10,
            borderRadius: 5,
            border: '2px solid #ccc',
            fontSize: 16,
            cursor: 'pointer',
        },
        clearButton: {
            padding: 10,
            margin: 10,
            borderRadius: 5,
            border: '2px solid #ccc',
            fontSize: 16,
            cursor: 'pointer',
            backgroundColor: '#f00',
            color: '#fff',
        },
    };
      
    return (
        <div style={styles.container}>
            <input
                type="text"
                value={searchValue}
                onChange={handleInput}
                onKeyPress={handleKeyPress}
                placeholder="Какой фильм?"
                style={styles.input}
            />
            <div>
                <button onClick={handleSearch} style={styles.button}>🔎</button>
                <button onClick={handleClear} style={styles.clearButton}>Очистить</button>
            </div>
        </div>
      );
};

export default Search;
