import { User } from "../entities"
import { DataSource } from "typeorm"

const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "migration",
    entities: [
        User
    ],
    migrations: ["./src/seeds/*.ts"],
})

export default PostgresDataSource