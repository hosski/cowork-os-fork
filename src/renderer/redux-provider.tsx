/**
 * CoWork Redux Provider Wrapper
 *
 * Initialize Redux store and wrap CoWork app with Provider.
 * Add this to your main React entry point.
 *
 * Usage:
 *   import { CoWorkReduxWrapper } from './renderer/redux-provider';
 *   export default function App() {
 *     return (
 *       <CoWorkReduxWrapper>
 *         <YourExistingApp />
 *       </CoWorkReduxWrapper>
 *     );
 *   }
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

interface Props {
  children: React.ReactNode;
}

export const CoWorkReduxWrapper: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

/**
 * HOC version (if you prefer to wrap specific components)
 *
 * Usage:
 *   export default withRedux(YourComponent);
 */
export const withRedux = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
