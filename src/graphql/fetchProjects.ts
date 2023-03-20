import { gql } from 'graphql-request'
import fetchGraphQL from './contentful-graphql-client'
import type { ProjectsProps } from '@/types/contentful'

async function fetchProjects(): Promise<ProjectsProps> {
  const query = gql`
    query {
      projectsSection: projectsSectionCollection {
        data: items {
          sectionTitle
        }
      }
      projectItems: projectItemsCollection(order: sys_firstPublishedAt_DESC) {
        items {
          name
          headline
          description
          imgUrl {
            title
            description
            url
          }
          techStack
          tags
          codeUrl
          liveUrl
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

export default fetchProjects
