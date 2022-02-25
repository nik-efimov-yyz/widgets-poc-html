import { store, actions } from './store'
import './variables.css'


export type InstacartSDKOptions = {
  accessToken: string
}

export class InstacartSDK {
  store
  
  constructor() {
    this.store = store
  }

  init = (options: InstacartSDKOptions) => {
    console.log("Instacart SDK: initializing.")

    if (!options.accessToken) {
      throw new Error('No access token provided for Instacart SDK. Please initialzie with { accessToken: string }')
    }

    setTimeout(() => {
      store.dispatch(actions.app.appReady())
      console.log("Instacart SDK: ready")
    }, 3000)
  }
}
