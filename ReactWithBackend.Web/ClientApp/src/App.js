import React from 'react';
import { Route } from 'react-router';
import PeopleTable from './PeopleTable';
import OtherPage from './OtherPage';
import EditPage from './EditPage';

const App = () => {
    return (
        <div>
            <Route exact path='/' component={PeopleTable} />
            <Route exact path='/other' component={OtherPage} />
            <Route exact path='/edit/:id' component={EditPage} />
        </div>
    );
}

export default App;