import { ImageOptions } from '../../domain/imageOptions'
import { UpdateImage } from '../actions/imageActions'
import { Action, handleAction, Reducer, ActionFunctions } from 'redux-actions'
                
const reducer = (state: ImageOptions, action:Action<string>) => {
    return new ImageOptions(action.payload, false);
};
                
export const ImageReducer = handleAction<ImageOptions,string>('UpdateImage', reducer, new ImageOptions(null, false));