import { FormikErrors } from 'formik';

export interface IApiError {
    // errors?: { [key: string]: string };
    errors?: FormikErrors<any>;
    message: string;
    status: number;
    statusText: string;
    /**
     * Do not show error.message to user when it's true
     */
    isNotHumanreadable?: boolean;
}

export interface IApiErrorMessage {
    error?: {
        message: string;
    };
}
