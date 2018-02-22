import React from 'react';
import renderer from 'react-test-renderer';

import ToDo from '../src/component/ToDo.js';

describe('<ToDo />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<ToDo />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });