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
        this.label = label;
        this.value = defaultValue;
        this.validationErrors = [];
        this.validationRules = validationRules;
        this.key = key
        this.showError = false;
    }

    frontValidate() {
        this.validationErrors = []

        for (const [message, validationRule] of Object.entries(this.validationRules)) {

            if (!validationRule(this.value)) {
                this.validationErrors.push(new ValidationError(message));
            }
        }
    }

    get showedError() {
        return this.showError ? (this.validationErrors) : []
    }
}