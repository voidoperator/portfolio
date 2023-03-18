import { gql } from 'graphql-request'
import fetchGraphQL from './contentful-graphql-client'
import type { Post } from '@/types/contentful'

async function fetchHeroBanner(): Promise<Post> {
  const query = gql`
    query {
      heroBannerSection: portfolioCollection {
        data: items {
          siteTitle
          heroGreeting
          heroHeadline
          heroSlogan
        }
      }
    }
  `

  const data = await fetchGraphQL(query)

  return data
}

export default fetchHeroBanner
