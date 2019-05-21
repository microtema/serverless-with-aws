export const getPayload = (body: any): any => {

    if ((typeof body === 'string')) {

        return JSON.parse(body);
    }

    return body;
};
