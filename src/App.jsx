import { React, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ScrollToTop from './scrollToTop';

import Home from './Pages/Home';
import Main from './Pages/Main';

function App() {
    return (
        <>
            <Router>
                <Fragment>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Main" component={Main} />
                    </Switch>
                </Fragment>
            </Router>
        </>
    )
}

export default App;
