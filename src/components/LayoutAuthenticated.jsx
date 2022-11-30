import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Layout, Menu } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
const { Footer, Sider, Content } = Layout;

const LayoutAuthenticated = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const navItem = [
    {
      label: 'Apartment List',
      to: '/'
    },
    {
      label: 'Request List',
      to: '/request'
    },
    {
      label: 'Unrent List',
      to: '/unrent'
    },
    {
      label: 'Unpaid List',
      to: '/unpaid'
    }
  ]
  const getItem = (label, key) => {
    return {
      key,
      label
    };
  }
  const items = navItem.map((item, index) => getItem(item.label, index.toString()));
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ background: 'white' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '20px',
          marginLeft: '10px'
        }}>
          <Avatar size={64} icon={<UserOutlined />} />
          <span style={{ marginLeft: '10px' }}>Admin01</span>
        </div>
        <Menu
          defaultSelectedKeys={[state?.position || '0']}
          mode="inline"
          style={{
            marginTop: '20px'
          }}
          onClick={(e) => {
            navigate(navItem[e.key].to, { state: { position: e.key } });
          }}
          items={items}
        />
        <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
          <Button shape='round' block danger style={{ marginTop: '10px' }}>Logout</Button>
        </div>
      </Sider>
      <Layout>
        <Content>{props.children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutAuthenticated