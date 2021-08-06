import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';

import store from '../../../models/_store';

import DetailPage from '../DetailPage';

const shallowRenderer = createRenderer();

describe('<DetailPage />', () => {
  it('should match snapshot', () => {
    shallowRenderer.render(
      <Provider store={store}>
        <DetailPage />
      </Provider>,
    );
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
