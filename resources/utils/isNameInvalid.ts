export const isNameInvalid = (value: string): boolean => {
    const pattern = /[^А-Яа-яЁё ]/g;
    return pattern.test(value);
};
