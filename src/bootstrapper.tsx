import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { CropperContainer, CropperProps } from './components/cropper'
import reducers from './store/store'

export function  CreateCropper(props: CropperProps, element: Element) {
    ReactDOM.render(
        <Provider store={createStore(reducers)}>
            <CropperContainer/>
        </Provider>
        , element);
}
