import {
  validateEmail,
  validatePassword,
  validateString,
} from '../utils/validate';

export const inpReducer = (state, action) => {
  const {validationRes, inpId, inpVal} = action;
  const updateValues = {
    ...state.inpValues,
    [inpId]: inpVal,
  };
  const updateValidity = {
    ...state.inpValidities,
    [inpId]: validationRes,
  };
  let isValidForm = true;

  for (const k in updateValidity) {
    if (updateValidity[k] !== undefined) {
      isValidForm = false;
      break;
    }
  }
  /* updateValidity?.forEach(validation => {
    if (validation !== undefined) {
      isValidForm = false;
      //   break;
    }
  }); */
  return {
    inpValues: updateValues,
    inpValidities: updateValidity,
    isFormValid: isValidForm,
  };
};

export const validateInp = (inpId, inpVal) => {
  if (inpId === 'name') {
    return validateString(inpId, inpVal);
  } else if (inpId === 'email') {
    return validateEmail(inpId, inpVal);
  } else if (inpId === 'password') {
    return validatePassword(inpId, inpVal);
  }
};
