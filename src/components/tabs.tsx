import React, { useState, useEffect, Component } from "react"
import PropTypes from "prop-types"
import Tab from "./tab"

interface Props {
  children?: any
}

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeTab: this.props.children[0].props.label,
    }
  }
  onClickTabItem = tab => {
    this.setState({ activeTab: tab })
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this
    return (
      <div className="tabs">
        <ol className="tab-list flex justify-around">
          {children.map(child => {
            const { label } = child.props

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            )
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab)
              return <div className="piilossa">{child.props.children}</div>
            return (
              <div className="active-tab-container">{child.props.children}</div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Tabs
