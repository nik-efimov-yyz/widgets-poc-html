
import * as React from 'react';
import { Provider } from 'react-redux'
import { AddToCart, AddToCartProps } from './AddToCart';
import { InstacartSDK } from '@instacart/sdk'

declare global {
  interface Window { instacart: InstacartSDK; }
}

export const Widget = (props: AddToCartProps) => {
  if (!window.instacart || !window.instacart.store) {
    throw new Error('Cannot find Instacart SDK, did you forget to include it?')
  }

  return (
    <Provider store={window.instacart.store}>
      <AddToCart {...props} />
    </Provider>
  )
}
