import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
const HomePage = lazy(() => import('Modules/Home'));
const SamplePage1 = lazy(() => import('Modules/Sample1'));

const Modules = () => {
    return (<BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/sample1">
                    <SamplePage1 />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Suspense>
    </BrowserRouter>)
}

export default Modules;