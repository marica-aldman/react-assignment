import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from '../spinner';
import MasterView from './masterView';
import DetailView from './detailView/detailView';

/** React function component */
export default function ViewContainer() {

    return (
        <Suspense fallback={< Spinner />}>
            <Switch>
                <Route exact path="/" render={() =>
                    <MasterView isModalOpen={false} currentPath={''} />
                } />
                <Route component={DetailView} />
            </Switch>
        </Suspense >
    );
}