const typeDefs = `
    type User {
        id: ID
        name: String
        family: String
        email: String
    }    

    type Query {
        profile: User
    }
`;

export default typeDefs;
