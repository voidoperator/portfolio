import { gql } from 'graphql-request'
import fetchGraphQL from './contentful-graphql-client'
import type { Contentful } from '@/types/contentful'

async function fetchAboutMe(): Promise<Contentful> {
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
