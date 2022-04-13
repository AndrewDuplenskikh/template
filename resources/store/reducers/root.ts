import { combineReducers } from 'redux';
import { common, ICommonState } from './common';
import { myFormReducer } from './my-form/my-form';
import { IMyFormState } from './my-form/types';

export const rootReducer = combineReducers({
    common,
    myFormReducer,
});

export type TRootState = {
    common: ICommonState;
    myFormReducer: IMyFormState;
};
