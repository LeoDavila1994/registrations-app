const { app } = require('./app');
const { db } = require('./utils/database.util');

const startServer = async () => {
  try {
    await db.authenticate().then(console.log('Database Authenticated'));

    await db.sync().then(console.log('Database Synchronized'));

    const PORT = 2894;
    app.listen(PORT, () => {
      console.log('Express app runing!');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
