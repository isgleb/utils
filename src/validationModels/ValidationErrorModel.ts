export class ValidationError {
    description: string;

    constructor(description) {
        if (description) {
            this.description = description;
            return this;
        }
        return undefined;
    }
}