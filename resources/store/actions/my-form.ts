import { IErrorsPayload, IFieldsPayload } from '../reducers/my-form/types';
import { myFormAPI } from '../../api/my-form/api';

export const CHANGE_FIELD_VALUE = 'MY_PAGE:CHANGE_FIELD_VALUE';
export const CHANGE_ERROR = 'MY_PAGE:CHANGE_ERROR';
export const CHANGE_SHOW_MODAL = 'MY_PAGE:CHANGE_SHOW_MODAL';
export const CHANGE_MODAL_TEXT = 'MY_PAGE:CHANGE_MODAL_TEXT';

/**
 * Устанавливает новое значение для определенного поля данных о заемщике
 *
 * @param fieldName имя поля
 * @param value новое значение
 */
export const changeFieldValue = ({ fieldName, value }: IFieldsPayload) => {
    return {
        type: CHANGE_FIELD_VALUE,
        payload: { [fieldName]: value },
    };
};

/**
 * Устанавливает ошибку для определенного поля
 *
 * @param payload Данные об ошибке
 * */
export const changeError = ({ fieldName, value }: IErrorsPayload) => {
    return {
        type: CHANGE_ERROR,
        payload: { [fieldName]: value },
    };
};

/**
 * Устанавливает значение флага, отвечающего за отображение модального окна
 *
 * @param value true в случае отображения модального окна
 */
export const changeShowModal = (value: boolean) => {
    return {
        type: CHANGE_SHOW_MODAL,
        payload: value,
    };
};

/**
 * Устанавливает текст для модального окна
 *
 * @param value текст для модального окна
 */
export const changeModalText = (value: string) => {
    return {
        type: CHANGE_MODAL_TEXT,
        payload: value,
    };
};

/**
 * Отправляет данные заемщика
 */
export const sendData = () => {
    return (dispatch: any, getState: any) => {
        const errors = getState().myFormReducer.errors;
        if (Object.values(errors).some((error) => error)) {
            return;
        }
        const fields = getState().myFormReducer.fields;
        myFormAPI
            .sendData(fields)
            .then((response) => {
                dispatch(changeModalText(response.modalText));
                dispatch(changeShowModal(true));
            })
            .catch((error) => alert(error.message));
    };
};
