import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

interface Props {
  siteTitle?: string
}
const Header = ({ siteTitle }: Props) => (
  <header className="bg-gray-900 mb-6 ">
    <div className="flex ml-0 pb-6 m-auto p-3 pb-0 justify-between">
      <h1 className=" text-gray-200 text-base">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <span className="w-auto"></span>
      <Link className="text-gray-200 text-base" to="/posts/">
        Posts
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
