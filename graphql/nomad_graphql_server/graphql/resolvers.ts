import { people, People, getById } from "./db";

const resolvers = {
  Query: {
    people: () => [people]!,
    person: (_: any, { id }: People) => getById(id),
  },
};

export default resolvers;
