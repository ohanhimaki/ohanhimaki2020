import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Banner = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "bigimage.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  const data2 = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pyoreekuva.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bigimage: file(relativePath: { eq: "bigimage.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="-mt-6 w-full m-auto pb-10">
      <div
        className="circleimg align-middle
       flex flex-col max-w-lg m-auto align-middle z-50 h-64"
      >
        <Img fluid={data2.placeholderImage.childImageSharp.fluid}></Img>
        <h1>Olli Hanhimäki</h1>
        <h2>IT-Tradenomi</h2>
      </div>
      <div className="bannerbigimage absolute w-full ">
        <Img fluid={data2.bigimage.childImageSharp.fluid}></Img>
      </div>
    </div>
  )
}

export default Banner
