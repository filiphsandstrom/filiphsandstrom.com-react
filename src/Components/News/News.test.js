import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import News from './News';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <News />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});