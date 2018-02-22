import React from 'react';
import renderer from 'react-test-renderer';

import AddToDo from '../src/component/AddToDo.js';

describe('<AddToDo />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<AddToDo />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });