import { createClient } from "redis";

export const CreateClient = () => {
  const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
      host: process.env.REDIS_HOST,
      port: 18082,
    },
  });

  return client;
};
