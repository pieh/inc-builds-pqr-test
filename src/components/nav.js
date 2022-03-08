import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export function Nav() {
  const data = useStaticQuery(graphql`
    {
      allTest {
        nodes {
          gatsbyPath(filePath: "/test/{Test.id}")
        }
      }
    }
  `)

  return (
    <>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        {data.allTest.nodes.map(({ gatsbyPath: pagePath }) => (
          <li key={pagePath}>
            <Link to={pagePath}>{pagePath}</Link>
          </li>
        ))}
      </ul>
      <hr />
    </>
  )
}
