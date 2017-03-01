import { createAction } from 'redux-actions';

export const UpdateImage = createAction('UpdateImage', async (p: Promise<string>) => {
    const result = await p;
    return result;
})

