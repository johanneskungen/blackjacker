export const rec = (pValue, dValue, c) => {
    const msg = "stand or split then double"
  
  if (pValue === 16 && dValue === 10 && c >= 0)
    return { message: msg };
  if (pValue === 15 && dValue === 10 && c >= 4)
    return { message: msg };
  if (pValue === 20 && dValue === 5 && c >= 5)
    return { message: msg };
  if (pValue === 20 && dValue === 6 && c >= 4)
    return { message: msg };
  if (pValue === 10 && dValue === 10 && c >= 4)
    return { message: msg };

  if (pValue === 12 && dValue === 3 && c >= 2)
    return { message: msg };
  if (pValue === 12 && dValue === 2 && c >= 3)
    return { message: msg };
  if (pValue === 11 && dValue === 11 && c >= 1)
    return { message: msg };
  if (pValue === 9 && dValue === 2 && c >= 1)
    return { message: msg };
  if (pValue === 10 && dValue === 11 && c >= 4)
    return { message: msg };
  if (pValue === 9 && dValue === 7 && c >= 3)
    return { message: msg };

  if (pValue === 16 && dValue === 9 && c >= 5)
    return { message: msg };
  if (pValue === 13 && dValue === 2 && c >= -1)
    return { message: msg };
  if (pValue === 12 && dValue === 4 && c >= 0)
    return { message: msg };
  if (pValue === 12 && dValue === 5 && c >= -2)
    return { message: msg };
  if (pValue === 12 && dValue === 6 && c >= -1)
    return { message: msg };
  if (pValue === 13 && dValue === 3 && c >= -2)
    return { message: msg };
};
