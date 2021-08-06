import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';

import store from '../../../../models/_store';

import ModalImage from '../ModalImage';

const shallowRenderer = createRenderer();

describe('<ModalImage />', () => {
  it('should match snapshot', () => {
    shallowRenderer.render(
      <Provider store={store}>
        <ModalImage />
      </Provider>,
    );
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
