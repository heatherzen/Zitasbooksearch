// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Book {
        bookId: ID
        authors: String
        description: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID 
        username: String
        email: String
        savedBooks: [Book]
    }
    type Query {
        users: [User]
        user(username: String!): User
        books(username: String): [Book]
        book(_id: ID!): Book
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
    type Auth {
        token: ID!
        user: User
    }

   
`;

// export the typeDefs
module.exports = typeDefs;