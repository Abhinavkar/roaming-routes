import { Routes, Route } from "react-router-dom";
import Destination from "./components/destination";
import Packages from "./components/packages";
import MyTrip from "./components/myTrip";
import Price from "./components/price";
import AdminForm from "./components/adminForm";
import Signin from "./components/signIn";

import Imagepack from "./components/imagePack";
import Trips from "./components/Trips";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/signin" element={<Signin/>} />
            <Route path="/destination" element={<Destination/>} />
            <Route path="/packages" element={< Packages/>} />
            <Route path="/mytrips" element={<MyTrip/>} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/price" element={<Price/>} />
            <Route path="/admin" element={<AdminForm/>} />
            <Route path="/images" element={<Imagepack/>} />
        </Routes>
    )
}
export default AllRoutes;