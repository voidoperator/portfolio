import { gql } from 'graphql-request'
import fetchGraphQL from './contentful-graphql-client'
import type { Contentful } from '@/types/contentful'

async function fetchSkills(): Promise<Contentful> {
  const query = gql`
    query {
      skillsSection: skillsSectionCollection {
        data: items {
          sectionTitle
          skillStack
        }
      }
    }
  `

  const data = await fetchGraphQL(query)

  return data
}

export default fetchSkills
