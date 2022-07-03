import { encrypt, isMatch } from './encryptor';

describe('Encryption', () => {
  const expression = 'test';

  it('Encrypted string should be match with the original expression', async () => {
    const encrypted = await encrypt(expression);
    console.log(encrypted);
    const isMatchResult = await isMatch(expression, encrypted);
    expect(isMatchResult).toBeTruthy();
  });
});
