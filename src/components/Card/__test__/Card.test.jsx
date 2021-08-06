import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';

import store from '../../../models/_store';

import Card from '../Card';

const shallowRenderer = createRenderer();

describe('<Card />', () => {
  it('should match snapshot', () => {
    shallowRenderer.render(
      <Provider store={store}>
        <Card
          id="testId"
          title="test"
          image="test.jpg"
          rating={8}
          releaseDate="2021"
        />
      </Provider>,
    );
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
