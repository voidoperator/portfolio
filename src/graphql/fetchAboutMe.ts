import { gql } from 'graphql-request'
import fetchGraphQL from './contentful-graphql-client'
import type { Post } from '@/types/contentful'

async function fetchAboutMe(): Promise<Post> {
  const query = gql`
    query {
      aboutMeSection: aboutmeCollection {
        data: items {
          sectionTitle
          greeting
          description
          imgUrl {
            title
            description
            url
          }
        }
      }
    }
  `

  const data = await fetchGraphQL(query)

  return data
}

export default fetchAboutMe
