import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
const HomePage = lazy(() => import('Pages/Home'));
const SamplePage1 = lazy(() => import('Pages/Sample1'));

const Routers = () => {
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

export default Routers;