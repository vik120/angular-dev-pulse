export interface FieldInputInterface{
    name: string,
    value: string,
    id: string,
    label?: string,
    type?: string,
    placeholder?: string,
    error: boolean,
    errorMessage: string,
    required: boolean,
    formControlName?: string
}
