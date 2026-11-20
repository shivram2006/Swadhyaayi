import bcrypt from 'bcryptjs';
import { config } from '../../config';

export const hashPassword = async (plainText: string): Promise<string> => {
  const salt = await bcrypt.genSalt(config.saltRounds);
  return bcrypt.hash(plainText, salt);
};

export const verifyPassword = async (plainText: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(plainText, hash);
};
