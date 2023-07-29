import { createClient } from "redis";

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port:18082
    }
});

async function RedisClient(){
    await client.connect();
    
    await client.set('kakashi', 'aditya');
    const value = await client.get('kakashi');
    await client.disconnect();
    console.log(value)
}

export default RedisClient