import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { Provider } from 'react-redux'
import TopBar from '../components/TopBar/top-bar-connected'
import { store } from './configure-store'

const App = () => {
    return(
        <Provider store={store}>
            <TopBar />
        </Provider>
    )
}

export default App
