import React, {
  useState,
  useEffect,
  Component,
  ReactChild,
  ReactPropTypes,
} from "react"
import PropTypes from "prop-types"
import Tab from "./tab"

interface Props {
  children: any
}

interface IState {
  activeTab: string
}

class Tabs extends Component<Props, IState> {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      activeTab: this.props.children[0].props.label,
    }
  }
  onClickTabItem = (tab: string) => {
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
          {children.map((child: any) => {
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
          {children?.map((child: any, index: number) => {
            if (child.props.label !== activeTab)
              return (
                <div className="piilossa" key={index}>
                  {child.props.children}
                </div>
              )
            return (
              <div className="active-tab-container" key={index}>
                {child.props.children}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Tabs
