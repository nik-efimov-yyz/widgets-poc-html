import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, actions } from '@instacart/sdk';

export type AddToCartProps = {
  product: string
}

export const AddToCart = ({ product }: AddToCartProps) => {
  const isReady = useSelector((state: RootState) => state.app.ready)
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(actions.app.addItem(product))
  }

  if (!isReady) {
    return <div>Widget loading...</div>
  }

  return (
    <div className="container">
      <h2>Add to cart widget</h2>
      <button onClick={onClick}>Add {product} to cart</button>
    </div>
  );
}