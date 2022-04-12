export const isEmailInvalid = (value: string): boolean => {
    const pattern =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !pattern.test(value);
};

export const isNameInvalid = (value: string): boolean => {
    const pattern = /[^А-Яа-яЁё ]/g;
    return pattern.test(value);
};

export const isPhoneInvalid = (value: string): boolean => {
    const pattern = /[^0-9-() ]/g;
    return pattern.test(value);
};
