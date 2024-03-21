import { getClient } from "@/app/apolloclient";
import gql from "graphql-tag";

const Characters = async () => {
  const { data } = await getClient().query({
    query: gql`
      query Query {
        characters {
          results {
            image
            id
            gender
            name
            species
          }
        }
      }
    `,
  });

  return <div>{JSON.stringify(data)}</div>;
};

export default Characters;
