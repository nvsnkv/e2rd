import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import * as promiseMiddleware from 'redux-promise'
import { Provider } from 'react-redux';
import { CropperContainer, CropperProps } from './components/cropper'
import reducers from './store/store'

export function  CreateCropper(props: CropperProps, element: Element) {
    ReactDOM.render(
        <Provider store={createStore(reducers, applyMiddleware(promiseMiddleware))}>
            <CropperContainer/>
        </Provider>
        , element);
}
