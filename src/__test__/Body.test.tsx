import * as React from 'react';
import { shallow } from 'enzyme';
import { Body } from '../components/Body';
import { desktopMainStyle } from '../constants/index';

describe('Body', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(<Body mainStyle={desktopMainStyle} />);
    });
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('contains 1 section tags', () => {
        expect(wrapper.find('section')).toHaveLength(1);
    });
    it('contains  5 div tags', () => {
        expect(wrapper.find('div')).toHaveLength(5);
    });
    it('contains  1 p tags', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });
    it('contains h1 with text <h1>Get paid for giving a shit.</h1>', () => {
        expect(wrapper.contains(<h1>Get paid for giving a shit.</h1>)).toBe(true);
    });
});
