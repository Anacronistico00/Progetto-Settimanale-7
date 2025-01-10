import { Navbar, Container, Nav } from 'react-bootstrap';

const EpiNavbar = () => {
  return (
    <Navbar collapseOnSelect expand='md'>
      <Container fluid={true}>
        <img
          src='/logo.png'
          alt='Netflix logo'
          style={{ width: '150px', height: '80px' }}
        />

        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          className='border-secondary navbar-dark'
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto '>
            <Nav.Link href='#' className='text-white fw-bold'>
              Home
            </Nav.Link>
            <Nav.Link href='#' className='text-secondary fw-bold'>
              TV Show
            </Nav.Link>
            <Nav.Link href='#' className='text-secondary fw-bold'>
              Movies
            </Nav.Link>
            <Nav.Link href='#' className='text-secondary fw-bold'>
              Recently Added
            </Nav.Link>
            <Nav.Link href='#' className='text-secondary fw-bold'>
              My List
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#' className='text-white fw-bold nav'>
              <i className='bi bi-search icons'></i>
            </Nav.Link>
            <Nav.Link href='#' className='text-white fw-bold'>
              KIDS
            </Nav.Link>
            <Nav.Link href='#' className='text-white fw-bold'>
              <i className='bi bi-bell icons'></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href='#' className='text-white fw-bold'>
              <i className='bi bi-person-circle icons'></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EpiNavbar;
