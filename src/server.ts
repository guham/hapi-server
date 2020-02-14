import Hapi from '@hapi/hapi';

const initServer = async () => new Hapi.Server({
  port: 3000,
  host: 'localhost',
});

const start = async () => {
  try {
    const server = await initServer();
    await server.start();
    console.log('🚀 Server ready at %s', server.info.uri);
  } catch (error) {
    console.log('Unable to start the server', error.message);
    throw error;
  }
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start();
