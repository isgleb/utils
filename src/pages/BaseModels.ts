export type ValidationFunc = (val: any) => string | ''

export class BaseField {
    label: string;
    value: string;
    key: string;
    backValidationError: string;
    frontValidationError: string;

    showError: boolean;

    frontValidations: Record<string, ValidationFunc>

    constructor({label = '', key, defaultValue = '', frontValidations = {}}) {
        this.label = label;
        this.value = defaultValue;
        this.backValidationError = '';
        this.frontValidationError = '';
        this.frontValidations = frontValidations;
        this.key = key
        this.showError = false;
    }

    frontValidate() {
        for (const validation of Object.values(this.frontValidations)) {
            const error = validation()
            if (error) {
                this.frontValidationError = error;
                break;
            }
        }
    }

    get showedError(){
        return this.showError ? (this.backValidationError || this.frontValidationError) : ''
    }
}

export class BaseFormSection {
    label?: string;
    key?: string
    fields: BaseField[];
    childSections: BaseFormSection[];

    constructor({label = '', key}) {
        this.label = label;
        this.key = key;
    }

    setBackErrors(errorsResponse: object) {
        this.fields.forEach((field) => {
            field.backValidationError = errorsResponse[field.key]
        })

        this.childSections.forEach((section) => {
            section.setBackErrors(errorsResponse[this.key])
        })
    }

    frontValidate() {
        this.fields.forEach((field) => field.frontValidate())
        this.childSections.forEach((section) => section.frontValidate())
    }

    get hasBackendErrors() {
        return this.fields.some(({backValidationError}) => backValidationError)
            || this.childSections.some(({hasBackendErrors}) => hasBackendErrors)
    }

    get hasFrontErrors() {
        return this.fields.some(({frontValidationError}) => frontValidationError)
            || this.childSections.some(({hasFrontErrors}) => hasFrontErrors)
    }

    get hasErrors() {
        return this.hasBackendErrors || this.hasFrontErrors
    }

    set showErrors(show: boolean) {
        this.fields.forEach((field) => {
            field.showError = show
        })

        this.childSections.forEach((section) => {
            section.showErrors = show
        })
    }
}