export const mobileRegex = new RegExp(/^0?9[0-9]{9}$/);

export const persianCharacterRegex = new RegExp(
  /[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی ]/,
);

export const numberRegex = new RegExp(/^\d+$/);

export const englishCharacterRegex = new RegExp(/^[a-zA-Z0-9_]*$/);

export const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z]).{4,10}$/);
