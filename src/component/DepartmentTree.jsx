import React from 'react'
import { connect } from 'react-redux'
import {
  Menu,
  Icon,
} from 'antd'

import {
  setDepartmentPath,
} from '../action/department'

import {
  departmentDataSelector,
} from '../selector/department'

const {
  SubMenu,
  Item,
} = Menu

const TeamTitle = ({
  text,
}) => <span><Icon type="team" /><span>{text}</span></span>

class DepartmentTree extends React.Component {

  handleSelectItem = ({item, key, selectedKeys}) => {
    const {
      path,
    } = item.props
    const {
      setDepartmentPath,
    } = this.props
    setDepartmentPath(path)
  }

  recursiveRender(data, path = []) {
    const {
      name,
      group,
    } = data
    if (group && group.length) {
      return (
        <SubMenu
          key={name}
          title={<TeamTitle text={'部门列表'} />}
        >
          <Item
            key={name}
            path={path.concat(name)}
          >
            {name}
          </Item>
          {group.map(g =>
            this.recursiveRender(g, path.concat(name))
          )}
        </SubMenu>
      )
    }
    return (
      <Item
        key={name}
        path={path.concat(name)}
      >
        {name}
      </Item>
    )
  }

  render() {
    const {
      data,
    } = this.props
    return (
      <Menu
        theme="dark"
        defaultSelectedKeys={['总部门']}
        defaultOpenKeys={['总部门']}
        mode="inline"
        onSelect={this.handleSelectItem}
      >
        {
          this.recursiveRender(data)
        }
      </Menu>
    )
  }
}

const mapStateToProps = state => {

  const department = departmentDataSelector(state)

  return {
    data: department,
  }
}

const mapDispatchToProps = {
  setDepartmentPath,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DepartmentTree)
