import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import ContactMe from './pages/ContactMe';
import AboutUs from './pages/AboutUs';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/contact-me">
                        <ContactMe />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;