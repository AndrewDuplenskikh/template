import {
    CHANGE_FIRST_NAME,
    CHANGE_PURPOSE,
    CHANGE_SECOND_NAME,
    CHANGE_THIRD_NAME,
    CHANGE_EMAIL,
    CHANGE_PHONE,
    CHANGE_ERROR,
    CHANGE_SHOW_MODAL,
    SET_RESP,
} from '../actions/my-form';

/**
 * Данные об ошибках
 *
 * @prop firstName Имя пользователя
 * prop secondName Отчество
 * */
export interface IErrorsPayload {
    firstName?: boolean;
    secondName?: boolean;
    thirdName?: boolean;
    purpose?: boolean;
    email?: boolean;
    phone?: boolean;
}

export interface IErrors {
    firstName: boolean;
    secondName: boolean;
    thirdName: boolean;
    purpose: boolean;
    email: boolean;
    phone: boolean;
}

export interface IMyFormState {
    firstName: string;
    secondName: string;
    thirdName: string;
    purpose: string;
    email: string;
    phone: string;
    showModal: boolean;
    resp: any;
    errors: IErrors;
}

const initialState: IMyFormState = {
    firstName: '',
    secondName: '',
    thirdName: '',
    purpose: '',
    email: '',
    phone: '',
    showModal: false,
    resp: {},
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
        case CHANGE_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload,
            };
        case CHANGE_SECOND_NAME:
            return {
                ...state,
                secondName: action.payload,
            };
        case CHANGE_THIRD_NAME:
            return {
                ...state,
                thirdName: action.payload,
            };
        case CHANGE_PURPOSE:
            return {
                ...state,
                purpose: action.payload,
            };
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case CHANGE_PHONE:
            return {
                ...state,
                phone: action.payload,
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
        case SET_RESP:
            return {
                ...state,
                resp: action.payload,
            };
        default:
            return state;
    }
};
