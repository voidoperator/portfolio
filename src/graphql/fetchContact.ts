import { gql } from 'graphql-request'
import fetchGraphQL from './contentful-graphql-client'
import type { Contentful } from '@/types/contentful'

async function fetchContact(): Promise<Contentful> {
  const query = gql`
    query {
      contactSection: contactCollection {
        data: items {
          sectionTitle
          email
          linkedInUrl
          githubUrl
          resumeUrl
        }
      }
    }
  `

  const data = await fetchGraphQL(query)

  return data
}

export default fetchContact
