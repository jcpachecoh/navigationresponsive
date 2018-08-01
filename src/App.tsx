import * as React from 'react';
import { NavHeader } from './components/NavHeader';
import {
  desktopMainStyle,
  responsiveMainStyle,
  responsiveMySideBarStyle,
  displayBlock
} from './constants';
import { desktopMySideBarStyle, displayNone } from './constants/index';
import { Body } from './components/Body';

interface AppState {
  styleMain: React.CSSProperties;
  styleMySideBar: React.CSSProperties;
  styleHeaderMobile: React.CSSProperties;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      styleMain: desktopMainStyle,
      styleMySideBar: desktopMySideBarStyle,
      styleHeaderMobile: displayNone
    };

    this.closeNav = this.closeNav.bind(this);
    this.openNav = this.openNav.bind(this);
  }

  closeNav() {
    this.setState({
      styleMain: desktopMainStyle,
      styleMySideBar: desktopMySideBarStyle,
      styleHeaderMobile: displayNone
    });

    const element: HTMLElement = document.getElementById('nav') as HTMLElement;
    element.classList.remove('responsive');
  }
  openNav() {
    this.setState({
      styleMain: responsiveMainStyle,
      styleMySideBar: responsiveMySideBarStyle,
      styleHeaderMobile: displayBlock
    });

    const element: HTMLElement = document.getElementById('nav') as HTMLElement;
    element.classList.add('responsive');
  }
  public render() {
    return (
      <div className="App">
        <NavHeader
          styleMySideBar={this.state.styleMySideBar}
          styleHeaderMobile={this.state.styleHeaderMobile}
          closeNav={() => this.closeNav()}
          openNav={() => this.openNav()}
        />
        <Body mainStyle={this.state.styleMain} />
      </div>
    );
  }
}

export default App;
