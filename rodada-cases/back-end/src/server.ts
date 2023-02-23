import index from "./index";
import { AddressInfo } from "net";


const server = index.listen(3003 , () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });