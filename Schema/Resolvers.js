const data = require("../data");

const resolvers = {
  Query: {
    getAllUsers() {
      return data.data;
    },
  },
  Mutation: {
    createUser(parent, args) {
      const newUser = args;

      data.data.push(newUser);
      return newUser;
    },
  },
};

module.exports = { resolvers };
