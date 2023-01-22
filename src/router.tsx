import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import HomePage from './components/pages/Home/HomePage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
    )
)

export default router
