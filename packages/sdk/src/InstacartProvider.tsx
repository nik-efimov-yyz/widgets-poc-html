import * as React from 'react'
import { Provider } from 'react-redux'
import { instacartContext } from './hooks'
import { InstacartSDK } from '.'
import './variables.css'

export type InstacartProviderProps = {
  children: React.ReactNode
  sdk: InstacartSDK
}
export const InstacartProvider = ({ children, sdk }: InstacartProviderProps) => {
  return <Provider store={sdk.store} context={instacartContext}>{children}</Provider>
}
