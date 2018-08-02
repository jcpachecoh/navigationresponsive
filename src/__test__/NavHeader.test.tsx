import * as React from 'react';
import { shallow } from 'enzyme';
import { NavHeader } from '../components/NavHeader';
import { desktopMySideBarStyle, displayNone } from '../constants/index';

describe('NavHeader', () => {
    let wrapper: any, mockfn: any = jest.fn();
    beforeEach(() => {
        wrapper = shallow(
            <NavHeader
                styleMySideBar={desktopMySideBarStyle}
                styleHeaderMobile={displayNone}
                closeNav={mockfn}
                openNav={mockfn}
            />);
    });
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('contains 5 div tags', () => {
        expect(wrapper.find('div')).toHaveLength(5);
    });
    it('contains  30 li tags', () => {
        expect(wrapper.find('li')).toHaveLength(30);
    });

    it('contains  31 a tags', () => {
        expect(wrapper.find('a')).toHaveLength(31);
    });

    it('contains huge div title', () => {
        expect(wrapper.contains(<div className="logo">HUGE</div>)).toBe(true);
    });

    it('contains a work in the nav header', () => {
        expect(wrapper.contains(<a href="#home" className="nav-menu">Work</a>)).toBe(true);
    });

    it('contains a about and them childs in the nav header', () => {
        expect(wrapper.contains(<a href="#home">About</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">What we do</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">How we work</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Leadership</a>)).toBe(true);
    });

    it('contains a Carrers and them childs in the nav header', () => {
        expect(wrapper.contains(<a href="#home">Carrers</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Client Services</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Creative</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Operations</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">People</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Strategy</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Technology</a>)).toBe(true);
    });
    it('contains a Ideas and them childs in the nav header', () => {
        expect(wrapper.contains(<a href="#home">Ideas</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Reports</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Perspectives</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Books</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Videos</a>)).toBe(true);
    });

    it('contains a News and them childs in the nav header', () => {
        expect(wrapper.contains(<a href="#home">News</a>)).toBe(true);
    });

    it('contains a Events and them childs in the nav header', () => {
        expect(wrapper.contains(<a href="#home">Events</a>)).toBe(true);
    });

    it('contains a Contacts and them childs in the nav header', () => {
        expect(wrapper.contains(<a href="#home">Contacts</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Atlanta</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Brooklyn</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">DC</a>)).toBe(true);
        expect(wrapper.contains(<a href="#">Los Angeles</a>)).toBe(true);
    });
});
