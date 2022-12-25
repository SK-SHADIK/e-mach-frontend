import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';
import CreateFisherman from './Admin/Files/Create/CreateFisherman';
import CreateOfficer from './Admin/Files/Create/CreateOfficer';
import CreateProduct from './Admin/Files/Create/CreateProduct';
import CreateQuestionAnswer from './Admin/Files/Create/CreateQuestionAnswer';
import CreateSuggestion from './Admin/Files/Create/CreateSuggestion';
import Fisherman from './Admin/Files/Fisherman';
import LeaveStatus from './Admin/Files/LeaveStatus';
import Officer from './Admin/Files/Officer';
import Orders from './Admin/Files/Orders';
import Product from './Admin/Files/Products';
import QuestionAnswer from './Admin/Files/QuestionAnswer';
import Statements from './Admin/Files/Statements';
import Suggestions from './Admin/Files/Suggestions';
import UpdateFisherman from './Admin/Files/Update/UpdateFisherman';
import UpdateOfficer from './Admin/Files/Update/UpdateOfficer';
import UpdateProduct from './Admin/Files/Update/UpdateProduct';
import UpdateQuestionAnswer from './Admin/Files/Update/UpdateQuestionAnswer';
import UpdateStatus from './Admin/Files/Update/UpdateStatus';
import UpdateSuggestion from './Admin/Files/Update/UpdateSuggestion';
import AddToCart from './Fisherman/Files/AddToCart';
import CreateProductFish from './Fisherman/Files/Create/CreateProductFish';
import CreateQuestions from './Fisherman/Files/Create/CreateQuestions';
import ProductFish from './Fisherman/Files/ProductsFish';
import QuestionAndAnswerFish from './Fisherman/Files/QuestionAndAnswerFish';
import SuggestionsFish from './Fisherman/Files/SuggestionsFish';
import UpdateProductFish from './Fisherman/Files/Update/UpdateProductFish';
import UpdateProfileFish from './Fisherman/Files/UpdateProfileFish';
import FishermanDashboard from './Fisherman/FishermanDashboard';
import Login from './Login';
import Logout from './Logout';
import AddFisherman from './Officer/Files/AddFisherman';
import OfficerDashboard from './Officer/OfficerDashboard';
import Regestration from './Regestration';
import QuestionAnswerO from './Officer/Files/QuestionAnswerO';
import SuggestionsO from './Officer/Files/SuggestionsO';
import CreateFishermanO from './Officer/Files/Create/CreateFishermanO';
import CreateSuggestionO from './Officer/Files/Create/CreateSuggestionO';
import CreateQuestionAnswerO from './Officer/Files/Create/CreateQuestionAnswerO';
import UpdateQuestionAnswerO from './Officer/Files/Update/UpdateQuestionAnswerO';
import UpdateSuggestionO from './Officer/Files/Update/UpdateSuggestionO';
import LeaveApplication from './Officer/Files/LeaveApplication';
import MyLeaveApplication from './Officer/Files/MyLeaveApplication';
import UpdateLeaveApplicationO from './Officer/Files/Update/UpdateLeaveApplicationO';
import UserQuestions from './Officer/Files/UserQuestions';
import CreateAnswerO from './Officer/Files/Create/CreateAnswerO';
import UpdateProfile from './Admin/Files/UpdateProfile';
import MyOrders from './Fisherman/Files/MyOrders';
import UpdateProfileO from './Officer/Files/UpdateProfileO';
import About from './Fisherman/Files/About';
import Contact from './Fisherman/Files/Contact';


const RouteLink = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Login />}></Route>

                    
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/Logout" element={<Logout />}></Route>
                    <Route path="/Regestration" element={<Regestration />}></Route>

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
                    <Route path="/Admin/Orders" element={<Orders />}></Route>
                    <Route path="/Admin/Statements" element={<Statements />}></Route>
                    <Route path="/Admin/LeaveStatus" element={<LeaveStatus />}></Route>
                    <Route path="/Admin/UpdateStatus/:Id" element={<UpdateStatus />}></Route>
                    <Route path="/Admin/UpdateProfile" element={<UpdateProfile />}></Route>




                    
                    {/*----------------------------------- FishermanDashboard'S ROUTES ------------------------------------*/}
                    <Route path="/FishermanDashboard" element={<FishermanDashboard />}></Route>
                    <Route path="/Fisherman/ProductFish" element={<ProductFish />}></Route>
                    <Route path="/Fisherman/CreateProductFish" element={<CreateProductFish />}></Route>
                    <Route path="/Fisherman/UpdateProductFish/:Id" element={<UpdateProductFish />}></Route>
                    <Route path="/Fisherman/QuestionAndAnswerFish" element={<QuestionAndAnswerFish />}></Route>
                    <Route path="/Fisherman/SuggestionsFish" element={<SuggestionsFish />}></Route>
                    <Route path="/Fisherman/CreateQuestions" element={<CreateQuestions />}></Route>
                    <Route path="/Fisherman/AddToCart" element={<AddToCart />}></Route>
                    <Route path="/Fisherman/UpdateProductFish" element={<UpdateProfileFish />}></Route>
                    <Route path="/Fisherman/MyOrders" element={<MyOrders />}></Route>
                    <Route path="/Fisherman/About" element={<About />}></Route>
                    <Route path="/Fisherman/Contact" element={<Contact />}></Route>


                                        
                    {/*----------------------------------- OfficerDashboard'S ROUTES ------------------------------------*/}
                    <Route path="/OfficerDashboard" element={<OfficerDashboard />}></Route>
                    <Route path="/Officer/AddFisherman" element={<AddFisherman />}></Route>
                    <Route path="/Officer/QuestionAnswer" element={<QuestionAnswerO />}></Route>
                    <Route path="/Officer/Suggestions" element={<SuggestionsO />}></Route>
                    <Route path="/Officer/CreateFisherman" element={<CreateFishermanO />}></Route>
                    <Route path="/Officer/CreateQuestionAnswer" element={<CreateQuestionAnswerO />}></Route>
                    <Route path="/Officer/CreateSuggestions" element={<CreateSuggestionO />}></Route>
                    <Route path="/Officer/UpdateQuestionAnswer/:Id" element={<UpdateQuestionAnswerO />}></Route>
                    <Route path="/Officer/UpdateSuggestions/:Id" element={<UpdateSuggestionO />}></Route>
                    <Route path="/Officer/LeaveApplication" element={<LeaveApplication />}></Route>
                    <Route path="/Officer/MyLeaveApplication" element={<MyLeaveApplication />}></Route>
                    <Route path="/Officer/UpdateLeaveApplication/:Id" element={<UpdateLeaveApplicationO />}></Route>
                    <Route path="/Officer/UserQuestions" element={<UserQuestions />}></Route>
                    <Route path="/Officer/CreateAnswer/:Id" element={<CreateAnswerO />}></Route>
                    <Route path="/Officer/UpdateProfileO" element={<UpdateProfileO />}></Route>


                    

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouteLink;