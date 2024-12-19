import {ValidationRule} from "./validationRules";
import {ValidationError} from "./ValidationErrorModel";

/** The message, which can be displayed if ValidateFunc returns true */
export type ValidationMessage = string

export class FieldModel {
    label: string;
    value: string;
    key: string;
    validationErrors: ValidationError[];

    showError: boolean;

    validationRules: Record<ValidationMessage, ValidationRule>

    constructor({label = '', key, defaultValue = '', validationRules}: {label?: string, key?: string, defaultValue?: string, validationRules?: Record<ValidationMessage, ValidationRule>}) {
        console.log(validationRules)
        this.label = label;
        this.value = defaultValue;
        this.validationErrors = [];
        this.validationRules = validationRules;
        this.key = key
        this.showError = false;

        console.log(this.validationRules)
    }

    frontValidate() {
        this.validationErrors = []
        console.log(this.validationRules)
        for (const [key, val] of Object.entries(this.validationRules)) {
            console.log(val)
            console.log(val(this.value))
            const error = val(this.value) ? '' : key
            if (error) {
                this.validationErrors.push(new ValidationError(error));
            }
        }
    }

    get showedError() {
        return this.showError ? (this.validationErrors) : []
    }
}