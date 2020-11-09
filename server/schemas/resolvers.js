const { User, Book } = require('../models');

const resolvers = {
    Query: {
      thoughts: async (parent, { username }) => {
          const params = username ? { username } : {};
        return Book.find(params).sort({ createdAt: -1 });
      }
    }
  };

  module.exports = resolvers;