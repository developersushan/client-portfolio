import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Routers';
import AuthContext from './Providers/AuthContext';
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContext>
    <RouterProvider router={router}>
    </RouterProvider>
    </AuthContext>


)
