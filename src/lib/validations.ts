import * as yup from 'yup';

export const secretContentValidation = yup.object().shape({
    secret: yup.string().required('secret'),
    passphrase: yup.string().required('passphrase'),
    expiration: yup.number().required('expiration').positive('expiration'),
});