import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Banner = () => {
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
    <div className="-mt-6 w-screen flex banner mb-40">
      <div
        className="circleimg align-middle
        flex-col max-w-lg m-auto align-middle z-50 flex "
      >
        <div className="w-full">
          <Img fluid={data2.placeholderImage.childImageSharp.fluid}></Img>
        </div>
        <h1 className="m-auto font-bold">Olli Hanhimäki</h1>
        <h2 className="m-auto font-bold text-gray-600">IT-Tradenomi</h2>
      </div>
      <div className="bannerbigimage absolute min-w-full ">
        <Img fluid={data2.bigimage.childImageSharp.fluid}></Img>
      </div>
    </div>
  )
}

export default Banner
