const pick = (schemaObj, req) => {
  const schemaObjKeys = Object.keys(schemaObj);

  let toValidateObj = {};
  Object.keys(req).forEach((key) => {
    if (schemaObjKeys.includes(key)) {
      toValidateObj[key] = req[key];
    }
  });

  return toValidateObj;
};

module.exports = pick;
