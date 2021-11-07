import { getAuth, signInWithProvider, GoogleAuthProvider } from 'firebase/auth';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import initializeAuthentication from './Pages/Login/Firebase/Firebase.init';
import Login from './Pages/Login/Login';
import AddPackage from './Pages/AddPackage/AddPackage';
import ConfirmBooking from './Pages/ConfirmBooking/ConfirmBooking';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Footer/Footer';
import Packages from './Pages/Home/Packages/Packages';
import AllBooking from './Pages/AllBooking/AllBooking';
import MyBooking from './Pages/MyBooking/MyBooking';


initializeAuthentication();


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/addpackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/mybooking/:email">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/allbooking">
              <AllBooking></AllBooking>
            </PrivateRoute>
            <PrivateRoute path="/confirmbooking/:id">
              <ConfirmBooking></ConfirmBooking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
