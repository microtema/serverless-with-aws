import assert from 'assert';
import {APIGatewayProxyHandler} from 'aws-lambda';
import YAML from 'json2yaml';
import 'source-map-support/register';

import * as Utils from '../src/Utils';

const handler: APIGatewayProxyHandler = async (event: any) => {

    try {

        assert(event, 'Event may not be null or undefined');
        assert(event.body, 'Body may not be null or undefined');

        const payload = Utils.getPayload(event.body);
        const result = YAML.stringify(payload);

        return {
            body: JSON.stringify(result),
            statusCode: 200,
        };

    } catch (e) {
        return {
            body: e.message,
            statusCode: 400,
        };
    }
};

export default handler;
