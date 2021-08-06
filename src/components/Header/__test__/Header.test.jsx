import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';

import store from '../../../models/_store';

import Header from '../Header';

const shallowRenderer = createRenderer();

describe('<Header />', () => {
  it('should match snapshot', () => {
    shallowRenderer.render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
