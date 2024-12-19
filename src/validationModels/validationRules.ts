
export type ValidationRule = (val: any) => boolean;

export const required = (val: any) => {
    return !!val;
}

export const min = (val, count) => {
    return count <= val.length
}