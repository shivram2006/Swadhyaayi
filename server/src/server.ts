import mongoose from 'mongoose';
import { createApp } from './app';
import { config } from './config';

const connectWithRetry = async () => {
  while (true) {
    try {
      console.log('[SWADHYAYI] Connecting to MongoDB Atlas at:', config.mongoUri.replace(/:([^:@]+)@/, ':****@'));
      await mongoose.connect(config.mongoUri, { serverSelectionTimeoutMS: 5000 });
      console.log('[SWADHYAYI] ✅ Connected to MongoDB database successfully.');
      break;
    } catch (err: any) {
      console.error('[SWADHYAYI] ⚠️ MongoDB Atlas connection waiting. Possible cause: Current IP not whitelisted in Atlas.');
      console.error('[SWADHYAYI] 👉 Please ensure 0.0.0.0/0 is added in MongoDB Atlas -> Security -> Network Access.');
      console.log('[SWADHYAYI] Retrying connection in 5 seconds...');
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
};

const startServer = async () => {
  try {
    await connectWithRetry();

    const app = createApp();
    const server = app.listen(config.port, () => {
      console.log(`[SWADHYAYI] 🚀 Server running in ${config.env} mode on http://localhost:${config.port}`);
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

startServer();
