import React from "react"

const Footer = () => (
  <footer className="flex justify-between m-auto">
    <div className="">
      <p className="pl-8">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
    <div className="flex justify-between">
      <p className="pr-8">
        <a
          href="https://www.linkedin.com/in/olli-hanhim%C3%A4ki-58a338b0/"
          className=""
        >
          LinkedIN
        </a>
      </p>
      <p>
        <a href="https://github.com/ohanhimaki" className="pr-8">
          Github
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
