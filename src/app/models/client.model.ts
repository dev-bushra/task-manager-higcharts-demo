// This keeps API data clean and strongly typed — helps IntelliSense and avoids bugs.
import { address } from "./address.model";

export interface company {
  name: string;
}
export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: address;
  company: company;
}
