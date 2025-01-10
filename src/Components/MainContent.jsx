import { Dropdown, Row } from 'react-bootstrap';
import CardRow from './CardRow';

const MainContent = () => {
  return (
    <div className='container-fluid px-4 text-white'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>
          <h2 className='mb-4 fs-1 fw-bolder'>TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle
              variant='dark'
              id='dropdown-basic'
              className='ms-4 bg-black border-white rounded-0 mt-2'
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu className='bg-dark'>
              <Dropdown.Item href='#' className='text-white'>
                Comedy
              </Dropdown.Item>
              <Dropdown.Item href='#' className='text-white'>
                drama
              </Dropdown.Item>
              <Dropdown.Item href='#' className='text-white'>
                Thriller
              </Dropdown.Item>
              <Dropdown.Item href='#' className='text-white'>
                Horror
              </Dropdown.Item>
              <Dropdown.Item href='#' className='text-white'>
                Love
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div>
          <i className='bi bi-grid icons mx-3 fs-4'></i>
          <i className='bi bi-grid-3x3 icons fs-4'></i>
        </div>
      </div>
      <h2>Trending Now</h2>
      <Row xs={1} sm={2} md={3} xl={6} className='my-3 text-center'>
        <CardRow searchKey='Mr bean' />
      </Row>

      <h2>Watch it Again</h2>
      <Row xs={1} sm={2} md={3} xl={6} className='my-3 text-center'>
        <CardRow searchKey='Harry Potter' />
      </Row>
      <h2>New Releases</h2>
      <Row xs={1} sm={2} md={3} xl={6} className='my-3 text-center'>
        <CardRow searchKey='Hitman' />
      </Row>
    </div>
  );
};

export default MainContent;
