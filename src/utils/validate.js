import validate from 'validate.js';

export const validateString = (id, val) => {
  const constraints = {
    presence: {
      allowEmpty: false,
    },
  };
  if (val !== '') {
    constraints.format = {
      pattern: '.+',
      flags: 'i',
      maessage: 'Value cannot be left Blank.',
    };
  }
  const validationResult = validate({[id]: val}, {[id]: constraints});
  return validationResult && validationResult[id];
};

export const validateEmail = (id, val) => {
  const constraints = {
    presence: {
      allowEmpty: false,
    },
  };
  if (val !== '') {
    constraints.email = true;
  }
  const validationResult = validate({[id]: val}, {[id]: constraints});
  return validationResult && validationResult[id];
};

export const validatePassword = (id, val) => {
  const constraints = {
    presence: {
      allowEmpty: false,
    },
  };
  if (val !== '') {
    constraints.length = {
      minimum: 6,
      message: 'Password must be atlease 6 characters',
    };
  }
  const validationResult = validate({[id]: val}, {[id]: constraints});
  return validationResult && validationResult[id];
};
