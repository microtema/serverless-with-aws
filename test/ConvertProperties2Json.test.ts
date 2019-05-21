import {Callback, Context} from 'aws-lambda';

import handler from '../src/ConvertProperties2Json';

describe('Convert Properties to Json API', () => {

    const sut = handler;
    const context = {} as Context;
    const callback = {} as Callback<any>;
    let event = null;

    describe('Converter scenario with status code: 400', () => {

        it('Should return 400 statusCode on null event', async () => {

            event = null;

            const result = await sut(event, context, callback);

            expect(result).toMatchSnapshot();
        });

        it('Should return 400 statusCode on empty event', async () => {

            event = {};

            const result = await sut(event, context, callback);

            expect(result).toMatchSnapshot();
        });

        it('Should return 400 statusCode on empty body', async () => {

            event = {body: ''};

            const result = await sut(event, context, callback);

            expect(result).toMatchSnapshot();
        });
    });

    describe('Converter scenario with status code: 200', () => {

        it('Should return 200 statusCode and translated properties as JSON', async () => {

            event = {body: 'foo=bar'};

            const result = await sut(event, context, callback);

            expect(result).toMatchSnapshot();
        });
    });
});
