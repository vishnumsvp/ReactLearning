import React from 'react';
import renderer from 'react-test-renderer';

import ToDoList from '../src/component/ToDoList.js';

describe('<ToDoList />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<ToDoList />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });