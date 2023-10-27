import Dict = NodeJS.Dict;


export const extractFormData = async (form : any) => {
    const formData = new FormData(form);
    const data : Dict<string | object | number> = {};
    formData.forEach((value, key) => (data[key] = value));
    return data;
}