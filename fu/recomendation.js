export const rec = (pValue, dValue, c, aces) => {
  const hit = "Hit";
  const stand = "Stand";
  const double = "Double";
  const split = "Split";

  switch (aces) {
    case 0:
      if (pValue === 8) return { message: hit };
      if (pValue === 9 && dValue === 9) return { message: hit };
      if (pValue === 9 && dValue > 2 && dValue < 7) return { message: double };
      if (pValue === 9 && dValue > 6 && dValue < 12) return { message: hit };
      if (pValue === 10 && dValue < 10) return { message: double };
      if (pValue === 10 && dValue > 9 && dValue < 12) return { message: hit };
      if (pValue === 11) return { message: double };
      if ((pValue === 12 && dValue === 2) || dValue === 3)
        return { message: hit };
      if (pValue === 12 && dValue > 3 && dValue < 7) return { message: stand };
      if (
        (pValue === 13 && dValue >= 2 && dValue < 7) ||
        (pValue === 14 && dValue >= 2 && dValue < 7) ||
        (pValue === 15 && dValue >= 2 && dValue < 7) ||
        (pValue === 16 && dValue >= 2 && dValue < 7)
      )
        return { message: stand };
      if (
        (pValue === 12 && dValue >= 7 && dValue <= 11) ||
        (pValue === 13 && dValue >= 7 && dValue <= 11) ||
        (pValue === 14 && dValue >= 7 && dValue <= 11) ||
        (pValue === 15 && dValue >= 7 && dValue <= 11) ||
        (pValue == 16 && dValue >= 7 && dValue <= 11)
      )
        return { message: hit };

      if (pValue >= 17 && pValue <= 21) return { message: stand };
    case 1:

  }
};
