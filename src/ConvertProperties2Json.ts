import assert from 'assert';
import {APIGatewayProxyHandler} from 'aws-lambda';
import propertiesToJSON from 'properties-to-json';
import 'source-map-support/register';

import * as Utils from '../src/Utils';

const convertProperties2Json: APIGatewayProxyHandler = async (event: any) => {
    try {

        assert(event, 'Event may not be null or undefined');
        assert(event.body, 'Body may not be null or undefined');

        const payload = Utils.getPayload(event.body).data;
        const result = propertiesToJSON(payload);

        return {
            body: JSON.stringify(result, null, 2),
            statusCode: 200,
        };

    } catch (e) {
        return {
            body: e.message,
            statusCode: 400,
        };
    }
};

export default convertProperties2Json;
