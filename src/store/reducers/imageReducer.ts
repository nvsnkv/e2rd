import { ImageOptions } from '../../domain/imageOptions'
import { ImageAction, ActionType } from '../actions/imageActions'
import { Action } from 'redux'
import { assign } from 'lodash'

export function ImageReducer(state: ImageOptions = new ImageOptions(null, false), action: ImageAction) {
    if (action) {
        switch(action.type) {
            case ActionType.Clear:
                return assign(state, { Image: null, Loading: false });

            case ActionType.SetLoading:
                return assign( state, {Loading: true});

            case ActionType.Update:
                return assign(state, {Image: action.data, Loading: false});

            default: return state;
        }
    }
}