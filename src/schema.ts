import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type User {
        id: ID
        name: String
        family: String
        email: String
    }    

    type Query {
        profile: User
    }
`);
