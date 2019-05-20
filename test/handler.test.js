import sut from '../src/handler';

describe('Converter scenario', () => {

  describe('Converter scenario with status code: 400', () => {

    let event = null;

    it('Should return 400 statusCode on null event', async () => {

      event = null;

      const result = await sut.convertProperties2Json(event);

      expect(result).toMatchSnapshot();
    });

    it('Should return 400 statusCode on empty event', async () => {

      event = {};

      const result = await sut.convertProperties2Json(event);

      expect(result).toMatchSnapshot();
    });

  });

  describe('Converter scenario with status code: 200', () => {

    let event = null;

    it('Should return 200 statusCode on empty body', async () => {

      event = {body: {data: ''}};

      const result = await sut.convertProperties2Json(event);

      expect(result).toMatchSnapshot();
    });

    it('Should return 200 statusCode and translated properties as JSON', async () => {

      event = {body: {data: 'foo=bar'}};

      const result = await sut.convertProperties2Json(event);

      expect(result).toMatchSnapshot();
    });

    it('Should return 200 statusCode with body as string', async () => {

      event = {body: JSON.stringify({data: 'foo=bar'})};

      const result = await sut.convertProperties2Json(event);

      expect(result).toMatchSnapshot();
    });
  });
});
