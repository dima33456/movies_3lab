import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Movies from '../components/Movies';
import SearchBar from '../components/Search';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [filmName, setfilmName] = useState('');
  const [Err, setErr] = useState(false);

  const handleSearch = (searchValue) => {
    setfilmName(searchValue);
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=c8ed8ebe&s=all`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
  }, []);

  useEffect(() => {
    if (filmName) {
      fetch('http://www.omdbapi.com/?apikey=c8ed8ebe&s=' + encodeURIComponent(filmName))
      
        .then(res => res.json())
        .then(data => {
          
          if (data.Response === "True") {
            setMovies(data.Search);
            setErr(false);
          } else {
            setMovies([]);
            setErr(true);
          }
        })
  
  

        .catch(error => {
          console.log('Error fetching movies:', error);
          setMovies([]);
          setErr(true);
        });
    }
  }, [filmName]);

  return (
    <Layout.Content>
      <SearchBar onSearch={handleSearch} />
      <Row>
        <Col xs={24} sm={{ span: 18, offset: 3 }}>
          <Row className='justify-center' gutter={[32, 32]}>
            {Err ? (
              <h1>Не найдено, проверьте название</h1>
            ) : movies.length ? (
              <Movies movies={movies} />
            ) : (
              <h1>Loading...</h1>
            )}
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Main;
