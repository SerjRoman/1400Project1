export interface IError {
    errorCode: string;
    message: string;
}

export const errors: IError[] = [
    {
        errorCode: 'P2002',
        message: 'Given non unique value'
    },
    {
        errorCode: 'P2003',
        message: 'Field is not found'
    },
    {
        errorCode: 'P2007',
        message: 'Data validation error'
    },
    {
        errorCode: 'P2014',
        message: 'Error in relations'
    }
]