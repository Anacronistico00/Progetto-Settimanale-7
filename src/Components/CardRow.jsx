import { Component } from 'react';
import { Col } from 'react-bootstrap';

const URL = 'http://www.omdbapi.com/?apikey=a5544ab3&s=';

class CardRow extends Component {
  state = {
    search: [],
  };

  getFilms = async () => {
    const searchKey = this.props.searchKey;
    console.log(searchKey);

    try {
      const response = await fetch(URL + searchKey);
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati dalla API');
      }
      const data = await response.json();
      const firstSix = data.Search.slice(0, 6);
      this.setState({
        search: firstSix,
      });
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <>
        {this.state.search.map((film, i) => {
          return (
            <Col key={i} className='px-1'>
              <img
                src={film.Poster}
                alt={film.Title}
                style={{ width: '100%', height: '95%' }}
              />
            </Col>
          );
        })}
      </>
    );
  }
}

export default CardRow;
