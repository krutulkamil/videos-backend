import * as dotenv from "dotenv";
import * as fs from "fs";

const environment = process.env.NODE_ENV || "development";

export const {
    HOST, PORT, DATABASE, USERNAME, PASSWORD, JWT_SECRET
} = dotenv.parse(fs.readFileSync(`${environment}.env`));