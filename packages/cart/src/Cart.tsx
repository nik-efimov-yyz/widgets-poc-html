import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, actions } from '@instacart/sdk';

const List = ({ items }: { items: string[] }) => {
  return (
    <ul>
      { items.map(item => <li>{item}</li>)}
    </ul>
  )
}

export const Cart = () => {
  const isReady = useSelector((state: RootState) => state.app.ready)
  const items = useSelector((state: RootState) => state.app.cart)

  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(actions.app.clear())
  }

  if (!isReady) {
    return <div>Widget loading...</div>
  }

  return (
    <div className="container">
      <h2>You cart currently has:</h2>
      { items.length > 0 ? <List items={items} /> : <p>Nada :(</p> }
      <button onClick={onClick}>Empty cart</button>
    </div>
  );
}