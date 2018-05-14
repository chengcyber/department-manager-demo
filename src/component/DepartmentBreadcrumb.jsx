import React from 'react'
import { connect } from 'react-redux'
import {
  Breadcrumb,
} from 'antd';

import {
  departmentListSelector,
} from '../selector/department'

class DepartmentBreadcrumb extends React.Component {
  render() {
    const {
      path,
    } = this.props
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        {
          path.map(item => {
            return (
              <Breadcrumb.Item key={item}>
                {item}
              </Breadcrumb.Item>
            )
          })
        }
      </Breadcrumb>
    )
  }
}

const mapStateToProps = (state) => departmentListSelector(state)

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DepartmentBreadcrumb)
