import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';

import store from '../../../models/_store';

import HomePage from '../HomePage';

const shallowRenderer = createRenderer();

describe('<HomePage />', () => {
  it('should match snapshot', () => {
    shallowRenderer.render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
