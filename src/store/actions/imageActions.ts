import { createAction } from 'redux-actions';

export const ImageAction = {
    Update: createAction<Promise<string>>("Image.Update")
}

