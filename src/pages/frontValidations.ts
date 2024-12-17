export const requiredVal = (value: string | number) => {
    return String(value) ? '' : 'Обязательное поле не заполнено'
}