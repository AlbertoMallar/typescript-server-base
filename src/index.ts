import * as dotenv from "dotenv";
import server from "./app/app";

dotenv.config();

const { PORT } = process.env as Record<string, string>;

if (!PORT) {
  throw new Error("PORT is not defined in .env");
}
server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
