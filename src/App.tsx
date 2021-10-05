import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CurrencySelectionPage from './pages/CurrencySelectionPage/CurrencySelectionPage';
import { routes } from './core/routes';
import { DetailedConverterPage } from './pages/DetailedConverterPage/DetailedConverterPage';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Route exact path={routes.dynamic.detail} component={DetailedConverterPage} />
                <Route exact path={routes.static.home} component={CurrencySelectionPage} />
            </Router>
        </React.Fragment>
    );
}

export default App;
