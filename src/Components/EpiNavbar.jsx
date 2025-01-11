import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';

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
            <Nav.Link href='#' className='text-white fw-bold'>
              <i className='bi bi-search icons navShadow'></i>
            </Nav.Link>
            <Nav.Link href='#' className='text-white fw-bold navShadow'>
              KIDS
            </Nav.Link>
            <Nav.Link href='#' className='text-white fw-bold'>
              <i className='bi bi-bell icons navShadow'></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href='#' className='text-white fw-bold p-0'>
              <Dropdown>
                <Dropdown.Toggle variant='dark' id='dropdown-basic'>
                  <i className='bi bi-person-circle icons'></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className='bg-dark ms-auto'>
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
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EpiNavbar;
