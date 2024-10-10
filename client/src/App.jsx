import { Routes, Route } from 'react-router-dom';
import Homepages from './pages/Homepages';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './components/routes/private';
import ForgotPasssword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/routes/Admin';
import AdminDashboard from './pages/Admin/adminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/User';
import Orders from './pages/User/Order';
import Profile from './pages/User/Profile';
import Products from './pages/Admin/Product';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails'
import Categories from './pages/Categories'
import CategoryProduct from './pages/CategoryProduct'
import CartPage from './pages/CartPage';
import AdminOrders from './pages/Admin/AdminOrder';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepages/>} />
        <Route path='/product/:slug' element={<ProductDetails/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/category/:slug' element={<CategoryProduct/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/dashboard' element={<PrivateRoute/>}>
        <Route path='user' element={<Dashboard/>} />
        <Route path='user/orders' element={<Orders/>} />
        <Route path='user/profile' element={<Profile/>} />
       
        </Route>
       
        <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path='admin' element={<AdminDashboard/>} />
        <Route path='admin/create-category' element={<CreateCategory/>} />
        <Route path='admin/create-product' element={<CreateProduct/>} />
        <Route path='admin/product/:slug' element={<UpdateProduct/>} />
        <Route path='admin/products' element={<Products/>}/>
        <Route path='admin/users' element={<Users/>} />
        <Route path='admin/orders' element={<AdminOrders/>} />
        </Route>
       
        <Route path='/register' element={<Register/>} />
        <Route path='/forgot-password' element={<ForgotPasssword/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='/*' element={<Pagenotfound/>} />
      </Routes>
    </>
  );
}

export default App;
