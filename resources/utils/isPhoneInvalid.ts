export const isPhoneInvalid = (value: string): boolean => {
    const pattern = /[^0-9-() ]/g;
    return pattern.test(value);
};
