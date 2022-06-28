const resolvers = {
  Query: {
    profile: () => {
      return {
        id: "32113549687afasf321adf35a4f",
        name: "Hamid",
        family: "Javadi",
        email: "javadi@gmail.com",
      };
    },
  },
};

export default resolvers;
