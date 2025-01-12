import { Component } from 'react';
import MainComponent from './MainComponent';
import EpiProfile from './EpiProfile';
import EpiSettings from './EpiSettings';
import EpiFooter from './EpiFooter';
import EpiNavbar from './EpiNavbar';

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

  displaySettings = () => {
    this.setState({
      main: 'none',
      profile: 'none',
      settings: 'block',
    });
  };

  displayProfile = () => {
    this.setState({
      main: 'none',
      profile: 'block',
      settings: 'none',
    });
  };

  render() {
    return (
      <>
        <header>
          <EpiNavbar
            home={this.displayHome}
            settings={this.displaySettings}
            profile={this.displayProfile}
          />
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
