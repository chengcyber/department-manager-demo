import React from 'react'
import { connect } from 'react-redux'
import {
  Table,
} from 'antd'

import SearchBar from './SearchBar'

import {
  setDepartmentSearchText,
} from '../action/department'

import {
  getCurrentUser,
} from '../selector/department'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
]

class UserContent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

  onChangeSearchText = (e) => {
    const {
      setDepartmentSearchText,
    } = this.props
    const searchText = e.target.value
    this.setState({
      searchText,
    })
    setDepartmentSearchText(searchText)
  }

  onResetSearchText = () => {
    const {
      setDepartmentSearchText,
    } = this.props
    this.setState({
      searchText: '',
    })
    setDepartmentSearchText('')
  }

  render() {
    const {
      data,
    } = this.props
    const {
      searchText,
    } = this.state
    return (
      <div>
        <SearchBar
          value={searchText}
          onChange={this.onChangeSearchText}
          onReset={this.onResetSearchText}
        />
        <Table
          dataSource={data}
          columns={columns}
          rowKey="name"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: getCurrentUser(state),
})

const mapDispatchToProps = {
  setDepartmentSearchText,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContent)
