import { createAction } from 'redux-actions';

export const ImageAction = {
    SetLoading: createAction<void>("Image.SetLoading"),
    ResetLoading: createAction<void>("Image.ResetLoading"),
    UpdateImage: createAction<string>("Image.Update"),
    ResetImage: createAction<void>("Image.Reset")
}

