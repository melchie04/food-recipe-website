export const generateRandom = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result + Date.now();
};

export const convertLetterToNumber = (letter) => {
  if (letter !== "") {
    return letter.toString().toLowerCase().charCodeAt(0) - 96;
  } else {
    return 0;
  }
};
