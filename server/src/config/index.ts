import dotenv from 'dotenv';
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000', 10),
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/swadhyayi',
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || 'swadhyayi_super_secret_access_key_2026_dev_mode_only',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'swadhyayi_super_secret_refresh_key_2026_dev_mode_only',
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  },
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  saltRounds: 12,
};
