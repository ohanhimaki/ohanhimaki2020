import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

interface Props {
  siteTitle?: string
}
const Header = ({ siteTitle }: Props) => (
  <header className="bg-gray-900 mb-6 ">
    <div className="flex ml-0 pb-5 m-auto p-6 justify-between">
      <Link className="text-gray-200 text-base" to="/">
        {siteTitle}
      </Link>
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
