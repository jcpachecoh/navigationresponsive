import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Function closeNav have been called ones', () => {
    wrapper.instance().closeNav = jest.fn();
    wrapper.instance().closeNav();
    expect(wrapper.instance().closeNav).toHaveBeenCalledTimes(1);
  });
  it('Function openNav have been called ones', () => {
    wrapper.instance().openNav = jest.fn();
    wrapper.instance().openNav();
    expect(wrapper.instance().openNav).toHaveBeenCalledTimes(1);
  });
});
