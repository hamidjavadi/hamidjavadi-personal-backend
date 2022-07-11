import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export const encrypt = function (expression: string) {
  return bcrypt.hash(expression, saltRounds);
};

export const isMatch = function (expression: string, encrypted: string) {
  return bcrypt.compare(expression, encrypted);
};
