import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './app'
import { Provider } from 'react-redux'
import { store } from './store/slices'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
