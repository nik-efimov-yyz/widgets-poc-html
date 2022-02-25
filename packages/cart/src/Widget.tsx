
import * as React from 'react';
import { Provider } from 'react-redux'
import { Cart } from './Cart';
import { InstacartSDK } from '@instacart/sdk'

declare global {
  interface Window { instacart: InstacartSDK; }
}

export const Widget = () => {
  if (!window.instacart || !window.instacart.store) {
    throw new Error('Cannot find Instacart SDK, did you forget to include it?')
  }

  return (
    <Provider store={window.instacart.store}>
      <Cart />
    </Provider>
  )
}
