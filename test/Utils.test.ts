import * as Utils from '../src/Utils';

describe('Utils.getPayload API', () => {

    const sut = Utils.getPayload;
    let event = null;

    it('Should return null', () => {

        event = null;

        expect(sut(event)).toEqual(null);
    });

    it('Should return empty Object', () => {

        event = {};

        expect(sut(event)).toEqual({});
    });

    it('Should return parsed string to Object', () => {

        event = JSON.stringify({});

        expect(sut(event)).toEqual({});
    });
});
