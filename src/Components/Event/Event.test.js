import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import Event from './Event';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Event />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});