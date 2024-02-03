import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Auth/Login';
import { Dashboard } from './Pages/Dashboard';
import { NotFound } from './Pages/Error/NotFound';

export const App = () => {
    return (
        <Routes>
            <Route path='/login'  element={<Login />} />
            <Route path='/dashboard'  element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
