import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './core/routes';
import { NotFoundPage } from './pages/NotFoundPage';
import { CurrencySelectionPage } from './pages/CurrencySelectionPage';
import { DetailedConverterPage } from './pages/DetailedConverterPage';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path={routes.dynamic.detail} component={DetailedConverterPage} />
                    <Route exact path={routes.static.home} component={CurrencySelectionPage} />
                    <Route path={'*'} component={NotFoundPage} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
