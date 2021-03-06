import React, { Component } from "react"
import PropTypes from "prop-types"

interface Props {
  activeTab: string
  label: string
  onClick: Function
}

class Tab extends Component<Props> {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this

    let className =
      "bg-gray-900 text-white p-3 rounded-t cursor-pointer flex-1 m-tabs -mb-1 justify-center flex hover:bg-black"

    if (activeTab === label) {
      className += " font-bold "
    }

    return (
      <li className={className} onClick={onClick} key={label}>
        {label}
      </li>
    )
  }
}

export default Tab
