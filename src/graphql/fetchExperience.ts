import { gql } from 'graphql-request'
import fetchGraphQL from './contentful-graphql-client'
import type { Post } from '@/types/contentful'

async function fetchExperience(): Promise<Post> {
  const query = gql`
    query {
      experienceSection: experienceSectionCollection {
        data: items {
          sectionTitle
        }
      }
      experienceItems: experienceCollection {
        items {
          name
          title
          subHeadline
          svgIconName
          startDate
          endDate
          techStack
          description
          sys {
            id
          }
        }
      }
    }
  `

  const data = await fetchGraphQL(query)

  return data
}

export default fetchExperience
