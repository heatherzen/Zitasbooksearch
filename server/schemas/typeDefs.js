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
`;

// export the typeDefs
module.exports = typeDefs;