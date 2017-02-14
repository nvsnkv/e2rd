import { ImageOptions } from '../../domain/imageOptions'
import { ImageAction } from '../actions/imageActions'
import { Action, handleActions } from 'redux-actions'
                             // Some of ImageActions has no payload, some - base64 string.
                             //                             |
                             //                             V
export const ImageReducer = handleActions<ImageOptions, string|void>({
    // 
    //    toString(): "an index signature must be string or number". Dura lex, sed lex
    //                          |
    //                          V
    [ImageAction.SetLoading.toString()]: (state, action) => new ImageOptions(state.Image, true),
    [ImageAction.ResetLoading.toString()]: (state, action) => new ImageOptions(state.Image, false),
    //
    // Action<string>: UpdateImage: ReduxActions.ActionFunctionAny<Action<string>>, but compiler can't derive presice type of action
    //                                                    |
    //                                                    V
    [ImageAction.UpdateImage.toString()]: (state, action:Action<string>) => new ImageOptions(action.payload, state.Loading),
    [ImageAction.ResetImage.toString()]: (state, action) => new ImageOptions(null, state.Loading),

}, new ImageOptions(null, false))