import LogoHeader from './components/LogoHeader'
import Brands from "./components/Brands"
import BrandTypes from "./components/BrandTypes"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TypeView from "./components/TypeView";
import HomePage from "./components/HomePage";
import Categories from "./components/Categories";
import CategoryTypes from "./components/CategoryTypes";
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import {
  CarOutlined,
  AppstoreOutlined,
  HomeOutlined,
  // BulbOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import React, {useState} from "react";

const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {Header, Content, Sider} = Layout;

  const toggle = () => { setCollapsed(!collapsed); }

  return (
    <Router>
      <Layout style={{minHeight: "100vh"}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <LogoHeader collapsed={collapsed}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined/>}>
              <Link to='/'>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CarOutlined/>} as={Link} to='/brands'>
              <Link to='/brands'>
                Brands
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreOutlined/>}>
              <Link to='/categories'>
                Categories
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{padding: 0}}>
            {(collapsed ?
                <MenuUnfoldOutlined className='trigger' onClick={toggle}/>
                :
                <MenuFoldOutlined className='trigger' onClick={toggle}/>
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <div>
              <Switch>
                <Route exact path="/">
                  <HomePage/>
                </Route>
                <Route path="/brands">
                  <Brands/>
                </Route>
                <Route path="/categories">
                  <Categories/>
                </Route>
                <Route path="/category">
                  <CategoryTypes/>
                </Route>
                <Route path="/brand">
                  <BrandTypes/>
                </Route>
                <Route path="/type">
                  <TypeView/>
                </Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );

}

export default App;
