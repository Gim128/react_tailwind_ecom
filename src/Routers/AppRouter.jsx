import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import User from "../Pages/user/user";
import Home from "../Pages/Home/Home";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="user" element={<User />} />
                {/*    46:10*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter