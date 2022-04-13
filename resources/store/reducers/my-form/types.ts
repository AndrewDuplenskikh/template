/**
 * Типы полей для компонента ProfileForm
 */
export type TFields = 'firstName' | 'secondName' | 'thirdName' | 'purpose' | 'email' | 'phone';

/**
 * Payload для changeError
 * @prop fieldName название поля
 * @prop value значение поля
 * */
export type IErrorsPayload = {
    fieldName: TFields;
    value: boolean;
};

/**
 * Payload для changeFieldValue
 * @prop fieldName название поля
 * @prop value значение поля
 */
export interface IFieldsPayload {
    fieldName: TFields;
    value: string;
}

/**
 * Признаки ошибок полей при заполнении формы
 * @prop firstName Фамилия заемщика
 * @prop secondName Имя заемщика
 * @prop thirdName Отчество заемщика
 * @prop purpose Цель кредита
 * @prop email Электронная почта заемщика
 * @prop phone Телефон заемщика
 */
export interface IErrors {
    firstName: boolean;
    secondName: boolean;
    thirdName: boolean;
    purpose: boolean;
    email: boolean;
    phone: boolean;
}

/**
 * Данные заемщика
 */
export interface IFields {
    firstName: string;
    secondName: string;
    thirdName: string;
    purpose: string;
    email: string;
    phone: string;
}

/**
 * Состояние формы
 *
 * @fields данные заемщика
 * @showModal признак отображения модального окна
 * @errors Признаки ошибок полей при заполнении формы
 */
export interface IMyFormState {
    showModal: boolean;
    modalText: string;
    fields: IFields;
    errors: IErrors;
}
