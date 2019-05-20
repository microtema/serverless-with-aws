import assert from 'assert';
import propertiesToJSON from 'properties-to-json';

'use strict';

module.exports.convertProperties2Json = async (event) => {

  try {

    assert(event, 'Event may not be null or undefined');
    assert(event.body, 'Body may not be null or undefined');

    const payload = getPayload(event.body);
    const properties = propertiesToJSON(payload);

    return {
      statusCode: 200,
      headers: {},
      body: JSON.stringify(properties, null, 2),
    };

  } catch (e) {
    return {
      statusCode: 400,
      message: e.message,
    };
  }

};

const getPayload = (body) => {

  if ((typeof body === 'string')) {
    return JSON.parse(body).data;
  }

  return body.data;
};
