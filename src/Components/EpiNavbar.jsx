import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from 'react-bootstrap';

const EpiNavbar = (props) => {
  return (
    <Container fluid={true}>
      <Navbar expand='lg'>
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
            <Nav.Link
              href='#'
              className='text-white fw-bold'
              onClick={props.home}
            >
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
            <div className='text-white fw-bold p-0'>
              <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title={<i className='bi bi-person-circle icons'></i>}
                id='dropdown-menu-align-responsive-1'
              >
                <Dropdown.Item onClick={props.profile}>
                  <i className='bi bi-person me-1'></i>
                  Manage Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={props.settings}>
                  <i className='bi bi-gear me-1'></i>Account
                </Dropdown.Item>
                <Dropdown.Item>
                  <i className='bi bi-info-circle me-1'></i>Help Center
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <i className='bi bi-power me-1'></i>Sign Out
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default EpiNavbar;
