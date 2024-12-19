import {FieldModel} from "./FieldModel";

export class FieldsSectionModel {
    label?: string;
    key?: string
    fields: FieldModel[];
    childSections: FieldsSectionModel[];

    constructor({label = '', key}: {label?: string, key?: string}) {
        this.label = label;
        this.key = key;
    }

    frontValidate() {
        this.fields.forEach((field) => field.frontValidate())
        this.childSections.forEach((section) => section.frontValidate())
    }

    get hasErrors() {
        return this.fields.some(({validationErrors}) => validationErrors.length)
            || this.childSections.some(({hasErrors}) => hasErrors)
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