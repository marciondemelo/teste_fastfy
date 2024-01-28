const Fastify = require('fastify');

const app = Fastify();
app.get('/hello', async (request, reply) => {
    return { hello: 'world' };
});

app.listen({ port: 3030 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
})