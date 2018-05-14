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
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
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
