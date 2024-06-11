import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Payment from './components/Payment';
import Exchange from './components/Exchange';
import TariffSelection from './components/TariffSelection';
import AddonsMarketplace from './components/AddonsMarketplace';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Admin from './components/Admin';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/payment" component={Payment} />
                <Route path="/exchange" component={Exchange} />
                <Route path="/tariffs" component={TariffSelection} />
                <Route path="/marketplace" component={AddonsMarketplace} />
                <Route path="/profile" component={Profile} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/admin" component={Admin} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
