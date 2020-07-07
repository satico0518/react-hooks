import React from 'react'

const { shallow } = require('enzyme');
const { default: HooksApp } = require('../HooksApp');

describe('HooksApp', () => {
  test('should render ok', () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
