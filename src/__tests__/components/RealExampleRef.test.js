const { shallow } = require('enzyme');
import React from 'react';

import '@testing-library/jest-dom';
import RealExampleRef from '../../components/04-useRef/RealExampleRef';

describe('RealExampleRef', () => {
  test('should match snapdhot', () => {
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should render MultipleCustomHooks', () => {
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
  });
  test('should not render MultipleCustomHooks', () => {
    const wrapper = shallow(<RealExampleRef />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
  });
});
