import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  database: "rent_flow_backend", 
  username: "postgres",       
  password: "2002",  
  host: "127.0.0.1",
  dialect: "postgres",
  models: [User],
});
