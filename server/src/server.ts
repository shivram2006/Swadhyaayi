import mongoose from 'mongoose';
import { createApp } from './app';
import { config } from './config';

const startServer = async () => {
  try {
    console.log('[SWADHYAYI] Connecting to MongoDB at:', config.mongoUri);
    await mongoose.connect(config.mongoUri, {
      maxPoolSize: 100,
      minPoolSize: 20,
      maxIdleTimeMS: 30000,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 5000,
    });
    console.log('[SWADHYAYI] Connected to MongoDB database successfully.');

    const app = createApp();
    const server = app.listen(config.port, () => {
      console.log(`[SWADHYAYI] Server running in ${config.env} mode on http://localhost:${config.port}`);
    });

    const shutdown = async (signal: string) => {
      console.log(`[SWADHYAYI] ${signal} signal received. Closing HTTP server & database connection...`);
      server.close(async () => {
        await mongoose.connection.close();
        console.log('[SWADHYAYI] Server and database connection gracefully closed.');
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
  } catch (err) {
    console.error('[SWADHYAYI] Fatal server startup error:', err);
    process.exit(1);
  }
};

if (require.main === module) {
  startServer();
}
