import { encrypt, isMatch } from './encryptor';

describe('Encryption', () => {
  const expression = 'test';

  test('Encrypted string should be match with the original expression', async () => {
    const encrypted = await encrypt(expression);
    const isMatchResult = await isMatch(expression, encrypted);
    expect(isMatchResult).toBeTruthy();
  });
});
