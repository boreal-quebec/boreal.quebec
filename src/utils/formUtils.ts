

export const extractFormData = async (form : any) => {
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    return data;
}