import React from 'react';

const { shallow } = require('enzyme');
const {
  default: MultipleCustomHooks,
} = require('../../components/03-examples/MultipleCustomHooks');
import '@testing-library/jest-dom';
import useFetch from '../../hooks/useFetch';
jest.mock('../../hooks/useFetch');

describe('MultipleCustomHooks', () => {
  test('should render ok', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
    });
    const wrapper = shallow(<MultipleCustomHooks initialId={5} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').text()).toBe('loading...');
  });
  test('should render correct info', () => {
    useFetch.mockReturnValue({
      data: [{ quote: 'Hello world!', author: 'Davo Gomez' }],
      loading: false,
    });
    const wrapper = shallow(<MultipleCustomHooks initialId={5} />);
    expect(wrapper.find('.mb-0').text()).toBe('Hello world!');
    expect(wrapper.find('footer').text()).toBe('Davo Gomez');
  });
  test('should call setId on button click', () => {
    useFetch.mockReturnValue({
      data: [{ quote: 'Hello world!', author: 'Davo Gomez' }],
      loading: false,
    });
    const wrapper = shallow(<MultipleCustomHooks initialId={5} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('h2').text()).not.toBe('current Quote Id: 5');
  });
});
