export const rec = (pValue, dValue, c, aces) => {
  console.log(pValue, dValue);
  const hit = "Hit";
  const stand = "Stand";
  const double = "Double";
  const split = "Split";

  switch (aces) {
    case 0:
      if (pValue === 9 && dValue === 9) return { message: hit };
      if (pValue === 9 && dValue > 2 && dValue < 7) return { message: double };
      if (pValue === 9 && dValue > 6 && dValue < 12) return { message: hit };
      if (pValue === 10 && dValue < 10) return { message: double };
      if (pValue === 10 && dValue > 9 && dValue < 12) return { message: hit };
      if (pValue === 11) return { message: double };
      if (pValue === 12 && dValue === 2) return { message: hit };
      if (pValue === 13 && dValue === 2) return { message: stand };
      if (
        (pValue === 12 && dValue >= 7 && dValue <= 11) ||
        (pValue === 13 && dValue >= 7 && dValue <= 11) ||
        (pValue === 14 && dValue >= 7 && dValue <= 11) ||
        (pValue === 15 && dValue >= 7 && dValue <= 11) ||
        (pValue == 16 && dValue >= 7 && dValue <= 11)
      )
        return { message: hit };

      if (pValue === 17) return { message: stand };
  }

  if (pValue === 15 && dValue === 10 && c >= 4) return { message: hit };

  if (pValue === 16 && dValue === 10 && c >= 0) return { message: hit };

  if (pValue === 20 && dValue === 5 && c >= 5) return { message: stand };
  if (pValue === 20 && dValue === 6 && c >= 4) return { message: stand };

  if (pValue === 16 && dValue === 9 && c >= 5) return { message: hit };
};
