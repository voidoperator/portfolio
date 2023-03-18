import { GraphQLClient, RequestDocument, Variables } from 'graphql-request'

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
)

async function fetchGraphQL<TData = any>(query: RequestDocument, variables: Variables = {}): Promise<TData> {
  const data = await client.request<TData>(query, variables)
  return data
}

export default fetchGraphQL
