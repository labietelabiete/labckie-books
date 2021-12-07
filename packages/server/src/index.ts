import { app } from "./server";
import { config } from "./config/config";
import { connect } from "./db/connect";
// import { seedAuthors } from "./db/seed";
// import { seedBooks } from "./db/seed";
// import { seedPurchase } from "./db/seed";

connect()
  .then(async () => {
    app.listen(config.app.port, () => {
      console.log(`Server is now running at port ${config.app.port}!`);
    });
    // await seedAuthors();
    // await seedBooks();
    // await seedPurchase();
  })
  .catch((error) => {
    console.log(`Error connecting the server: ${error}`);
  });
