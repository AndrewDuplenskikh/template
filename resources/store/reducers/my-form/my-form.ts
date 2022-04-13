import { CHANGE_FIELD_VALUE, CHANGE_ERROR, CHANGE_SHOW_MODAL, CHANGE_MODAL_TEXT } from '../../actions/my-form';
import { IMyFormState } from './types';

const initialState: IMyFormState = {
    showModal: false,
    modalText: '',
    fields: {
        firstName: '',
        secondName: '',
        thirdName: '',
        purpose: '',
        email: '',
        phone: '',
    },
    errors: {
        firstName: false,
        secondName: false,
        thirdName: false,
        purpose: false,
        email: false,
        phone: false,
    },
};

export const myFormReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_FIELD_VALUE:
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...action.payload,
                },
            };
        case CHANGE_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    ...action.payload,
                },
            };
        case CHANGE_SHOW_MODAL:
            return {
                ...state,
                showModal: action.payload,
            };
        case CHANGE_MODAL_TEXT:
            return {
                ...state,
                modalText: action.payload,
            };
        default:
            return state;
    }
};
