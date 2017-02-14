import './cropper.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'

import { ImageOptions } from '../domain/imageOptions'
import { ImageAction } from '../store/actions/imageActions'
import { FileLoader } from './fileLoader'

export interface CropperProps {
    Image: ImageOptions;
    FileLoaded: (data: string) => void;
    FileSelected: () => void
    ErrorOccured: () => void
}

export function Cropper (props: CropperProps): JSX.Element {
    return <Panel className="workbench modal-container">
                    {!props.Image.Image && <FileLoader onFileLoaded={props.FileLoaded} onFileSelected={props.FileSelected}/>}
                    {props.Image.Image && <img src={props.Image.Image} />}
    </Panel>
}


export const CropperContainer = connect((state: {Image: ImageOptions}) => ({
    Image: state.Image
}),(dispatch) => ({
    FileSelected: () => dispatch(ImageAction.SetLoading()),
    FileLoaded: (data: string) => {
        dispatch(ImageAction.UpdateImage(data)); 
        dispatch(ImageAction.ResetLoading()); 
    },
    ErrorOccured: () => {
        dispatch(ImageAction.ResetImage());
        dispatch(ImageAction.ResetLoading());
    }
}))(Cropper);

