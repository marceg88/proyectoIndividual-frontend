import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from '../components/Navbar/navBar'
import {HomeMain} from '../components/home/main/homeMain'
import { LoginForm } from '../components/login/login'
import { FormRegister } from '../components/registerUser/registerUser'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <header>
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomeMain />}/>
                    <Route path="/login" element={<LoginForm />}/>
                    <Route path="/register" element={<FormRegister />}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}