import './cropper.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'

import { ImageOptions } from '../domain/imageOptions'
import { UpdateImage } from '../store/actions/imageActions'
import { FileLoader } from './fileLoader'

export interface CropperProps {
    Image: ImageOptions;
    FileSelected: (file: Promise<string>) => void
}

export function Cropper (props: CropperProps): JSX.Element {
    return <Panel className="workbench modal-container">
                    {!props.Image.Image && <FileLoader onFileSelected={props.FileSelected}/>}
                    {props.Image.Image && <img src={props.Image.Image} />}
    </Panel>
}


export const CropperContainer = connect((state: {Image: ImageOptions}) => ({
    Image: state.Image
}),(dispatch) => ({
    FileSelected: (file: Promise<string>) => dispatch(UpdateImage(file))
}))(Cropper);

