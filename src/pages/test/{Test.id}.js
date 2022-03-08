import React from "react"
import { graphql } from "gatsby"
import { Nav } from "../../components/nav"

export default function Template({ data }) {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Nav />
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    test(id: { eq: $id }) {
      index
      buildNumber
    }
  }
`
