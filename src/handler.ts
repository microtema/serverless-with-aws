import assert from 'assert';
import {APIGatewayProxyHandler} from 'aws-lambda';
import propertiesToJSON from 'properties-to-json';
import 'source-map-support/register';

export const convertProperties2Json: APIGatewayProxyHandler = async (event: any) => {
    try {

        assert(event, 'Event may not be null or undefined');
        assert(event.body, 'Body may not be null or undefined');

        const payload = getPayload(event.body);
        const properties = propertiesToJSON(payload);

        return {
            body: JSON.stringify(properties, null, 2),
            statusCode: 200,
        };

    } catch (e) {
        return {
            body: e.message,
            statusCode: 400,
        };
    }
};

const getPayload = (body: any): string => {

    if ((typeof body === 'string')) {
        return JSON.parse(body).data;
    }

    return body.data;
};
