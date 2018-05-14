import React from 'react'
import {
  Icon,
  Input,
} from 'antd'

class SearchBar extends React.Component {

  emitEmpty = () => {
    const {
      onReset,
    } = this.props
    this.userNameInput.focus();
    if (onReset) {
      onReset()
    }
  }

  render() {
    const {
      value,
      onChange,
    } = this.props;
    const suffix = value ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <Input
        style={{
          position: 'relative',
          zIndex: 10,
          width: 240,
          float: 'right',
          marginBottom: 6,
        }}
        placeholder="Search username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={value}
        onChange={onChange}
        ref={node => this.userNameInput = node}
      />
    )
  }
}

export default SearchBar
