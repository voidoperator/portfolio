import { gql } from 'graphql-request'
import fetchGraphQL from './contentful-graphql-client'
import type { Post } from '@/types/contentful'

async function getPosts(): Promise<Post> {
  const query = gql`
    query {
      portfolio(id: "QBnVbdTyElGfrjgucH7xY") {
        siteTitle
      }
      herobanner: portfolioCollection {
        items {
          siteTitle
          heroGreeting
          heroHeadline
          heroSlogan
        }
      }
      aboutme: aboutmeCollection {
        items {
          sectionTitle
          greeting
          imgUrl {
            title
            description
            url
          }
          description
        }
      }
      experience: experienceCollection(order: sys_publishedAt_DESC) {
        items {
          name
          svgIconName
          title
          subHeadline
          type
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

export default getPosts
