import assert from 'assert';

'use strict';

module.exports.convertProperties2Json = async (event) => {

  try {

    assert(event, 'Event may not be null or undefined');
    assert(event.body, 'Body may not be null or undefined');

    const payload = getPayload(event.body);
    const properties = convertProperties2Json(payload);

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

const convertProperties2Json = (propertiesAsString) => {

  const properties = {};

  if (!propertiesAsString) {
    return properties;
  }

  const lines = propertiesAsString.split("\n");

  lines.forEach(it => {

    const tokens = it.split("=");
    const propertyName = trim(tokens[0]);

    if (!propertyName) {
      return;
    }

    properties[propertyName] = trim(tokens[1]);
  });

  return properties;
};

const trim = (str) => {

  return (str || '').trim();
};

const getPayload = (body) => {

  if ((typeof body === 'string')) {
    return JSON.parse(body).data;
  }

  return body.data;
};
