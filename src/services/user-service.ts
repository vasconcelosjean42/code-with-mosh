import create from "./http-servive";

export interface User {
  id: number;
  name: string;
}

export default create("/users")