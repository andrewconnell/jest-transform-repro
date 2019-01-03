import * as React from 'react';

import 'jest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

jest.mock('@microsoft/sp-core-library/', () => {
  return {
    'Environment': {},
    'EnvironmentType': {}
  };
});

import {
  Sample,
  ISampleProps
} from './Sample';

test('should render Sample component correctly', () => {
  const wrapper = shallow(<Sample />);
  expect(wrapper.find('span').text()).toBe('Hello world:');
  expect(wrapper.find('li').length).toBe(3);
  expect(wrapper).toMatchSnapshot();
});
