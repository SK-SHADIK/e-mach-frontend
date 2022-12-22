import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';
import CreateFisherman from './Admin/Files/Create/CreateFisherman';
import CreateOfficer from './Admin/Files/Create/CreateOfficer';
import CreateProduct from './Admin/Files/Create/CreateProduct';
import CreateQuestionAnswer from './Admin/Files/Create/CreateQuestionAnswer';
import CreateSuggestion from './Admin/Files/Create/CreateSuggestion';
import Fisherman from './Admin/Files/Fisherman';
import Officer from './Admin/Files/Officer';
import Product from './Admin/Files/Products';
import QuestionAnswer from './Admin/Files/QuestionAnswer';
import Suggestions from './Admin/Files/Suggestions';
import UpdateFisherman from './Admin/Files/Update/UpdateFisherman';
import UpdateOfficer from './Admin/Files/Update/UpdateOfficer';
import UpdateProduct from './Admin/Files/Update/UpdateProduct';
import UpdateQuestionAnswer from './Admin/Files/Update/UpdateQuestionAnswer';
import UpdateSuggestion from './Admin/Files/Update/UpdateSuggestion';


const RouteLink = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<AdminDashboard />}></Route>

                    {/*----------------------------------- ADMIN'S ROUTES ------------------------------------*/}
                    <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
                    <Route path="/Admin/Officer" element={<Officer />}></Route>
                    <Route path="/Admin/Fisherman" element={<Fisherman />}></Route>
                    <Route path="/Admin/QuestionAnswer" element={<QuestionAnswer />}></Route>
                    <Route path="/Admin/CreateOfficer" element={<CreateOfficer />}></Route>
                    <Route path="/Admin/CreateFisherman" element={<CreateFisherman />}></Route>
                    <Route path="/Admin/CreateQuestionAnswer" element={<CreateQuestionAnswer />}></Route>
                    <Route path="/Admin/UpdateOfficer/:Id" element={<UpdateOfficer />}></Route>
                    <Route path="/Admin/UpdateFisherman/:Id" element={<UpdateFisherman />}></Route>
                    <Route path="/Admin/UpdateQuestionAnswer/:Id" element={<UpdateQuestionAnswer />}></Route>
                    <Route path="/Admin/Product" element={<Product />}></Route>
                    <Route path="/Admin/CreateProduct" element={<CreateProduct />}></Route>
                    <Route path="/Admin/UpdateProduct/:Id" element={<UpdateProduct />}></Route>
                    <Route path="/Admin/Suggestions" element={<Suggestions />}></Route>
                    <Route path="/Admin/CreateSuggestion" element={<CreateSuggestion />}></Route>
                    <Route path="/Admin/UpdateSuggestion/:Id" element={<UpdateSuggestion />}></Route>

                    

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouteLink;