import * as React from 'react';

export interface NavHeaderProps {
  styleMySideBar: React.CSSProperties;
  styleHeaderMobile: React.CSSProperties;
  closeNav: Function;
  openNav: Function;
}

export interface NavHeaderState {

}

export class NavHeader extends React.Component<NavHeaderProps, NavHeaderState> {
  constructor(props: NavHeaderProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <div
          className="header-mobile"
          id="header-mobile"
          style={this.props.styleHeaderMobile}
        >
          <div className="logo">HUGE</div>

          <a
            href="javascript:void(0);"
            className="close-icon"
            onClick={() => this.props.closeNav()}
          >
            <i className="fa fa-times" />
          </a>
        </div>
        <div id="mySidebar" className="header">
          <div className="logo">HUGE</div>
          <nav id="nav" className="topnav">
            <ul>
              <li className="icon">
                <a href="javascript:void(0);" onClick={() => this.props.openNav()}>
                  <i className="fa fa-bars" />
                </a>
              </li>
              <li>
                <a href="#home" className="nav-menu">
                  Work
                </a>
              </li>
              <li className="dropdown">
                <a href="#home">About</a>
                <ul className="subnav">
                  <li>
                    <a href="#">What we do</a>
                  </li>
                  <li>
                    <a href="#">How we work</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#home">Carrers</a>
                <ul className="subnav">
                  <li>
                    <a href="#">Client Services</a>
                  </li>
                  <li>
                    <a href="#">Creative</a>
                  </li>
                  <li>
                    <a href="#">Motion & Media</a>
                  </li>
                  <li>
                    <a href="#">Operations</a>
                  </li>
                  <li>
                    <a href="#">People</a>
                  </li>
                  <li>
                    <a href="#">Strategy</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                  <li>
                    <a href="#">UX & Product Design</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#home">Ideas</a>
                <ul className="subnav">
                  <li>
                    <a href="#">Reports</a>
                  </li>
                  <li>
                    <a href="#">Perspectives</a>
                  </li>
                  <li>
                    <a href="#">Books</a>
                  </li>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#home">News</a>
              </li>
              <li>
                <a href="#home">Events</a>
              </li>
              <li className="dropdown">
                <a href="#home">Contacts</a>
                <ul className="subnav">
                  <li>
                    <a href="#">Atlanta</a>
                  </li>
                  <li>
                    <a href="#">Brooklyn</a>
                  </li>
                  <li>
                    <a href="#">DC</a>
                  </li>
                  <li>
                    <a href="#">London</a>
                  </li>
                  <li>
                    <a href="#">Los Angeles</a>
                  </li>
                  <li>
                    <a href="#">Oakland</a>
                  </li>
                  <li>
                    <a href="#">Toronto</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
