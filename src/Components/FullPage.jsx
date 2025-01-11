import { Component } from 'react';
import MainComponent from './MainComponent';
import EpiProfile from './EpiProfile';
import EpiSettings from './EpiSettings';
import EpiFooter from './EpiFooter';
import {
  ButtonGroup,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
} from 'react-bootstrap';

class FullPage extends Component {
  state = {
    main: 'block',
    profile: 'none',
    settings: 'none',
  };

  displayHome = () => {
    this.setState({
      main: 'block',
      profile: 'none',
      settings: 'none',
    });
  };

  displayProfile = () => {
    this.setState({
      main: 'none',
      profile: 'block',
      settings: 'none',
    });
  };

  displaySettings = () => {
    this.setState({
      main: 'none',
      profile: 'none',
      settings: 'block',
    });
  };

  render() {
    return (
      <>
        <header>
          <Navbar expand='lg'>
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
                  <Nav.Link
                    href='#'
                    className='text-white fw-bold'
                    onClick={this.displayHome}
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
                      <Dropdown.Item eventKey='1' onClick={this.displayProfile}>
                        <i className='bi bi-person me-1'></i>
                        Manage Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey='2'
                        onClick={this.displaySettings}
                      >
                        <i className='bi bi-gear me-1'></i>Account
                      </Dropdown.Item>
                      <Dropdown.Item eventKey='3'>
                        <i className='bi bi-info-circle me-1'></i>Help Center
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey='4'>
                        <i className='bi bi-power me-1'></i>Sign Out
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <main>
          <MainComponent display={this.state.main} />
          <EpiProfile display={this.state.profile} />
          <EpiSettings display={this.state.settings} />
        </main>

        <EpiFooter />
      </>
    );
  }
}

export default FullPage;
