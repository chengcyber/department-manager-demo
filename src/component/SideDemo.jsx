import React from 'react'
import './SideDemo.css'
import {
  Layout,
} from 'antd';
import DepartmentTree from './DepartmentTree'
import DepartmentBreadcrumb from './DepartmentBreadcrumb'
import UserContent from './UserContent'

const {
  // Header,
  Content,
  Footer,
  Sider,
} = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <DepartmentTree
          />
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <DepartmentBreadcrumb />
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <UserContent />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Department Management - by Cheng
          </Footer>
        </Layout>
      </Layout>
    );
  }
}


export default SiderDemo
