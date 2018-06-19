import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import Events from './Events';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Events />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});