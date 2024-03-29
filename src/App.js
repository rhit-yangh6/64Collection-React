import LogoHeader from './components/LogoHeader'
import Brands from "./pages/brandsPage/Brands"
import BrandTypes from "./pages/brandTypesPage/BrandTypes"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TypeView from "./pages/typeViewPage/TypeView";
import HomePage from "./pages/homePage/HomePage";
import Categories from "./pages/categoriesPage/Categories";
import CategoryTypes from "./pages/categoryTypesPage/CategoryTypes";
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import {
  CarOutlined,
  AppstoreOutlined,
  HomeOutlined,
  BulbOutlined,
  StarOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import React, {useState} from "react";
import Featured from "./pages/featuredPage/Featured";
import Random from "./pages/randomPage/Random";
import Statistics from "./pages/statisticsPage/Statistics";

const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {Header, Content, Sider, Footer} = Layout;

  return (
    <Router>
      <Layout style={{minHeight: "100vh"}}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => { setCollapsed(!collapsed); }} breakpoint="md">
          <LogoHeader collapsed={collapsed} />
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
            <Menu.Item key="4" icon={<StarOutlined/>}>
              <Link to='/featured'>
                Featured
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<BulbOutlined/>}>
              <Link to='/random'>
                Random
              </Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<PieChartOutlined />}>
              <Link to='/stats'>
                Statistics
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{padding: 0}}>
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
                <Route path="/category/:category">
                  <CategoryTypes/>
                </Route>
                <Route path="/brand/:brandId">
                  <BrandTypes/>
                </Route>
                <Route path="/featured">
                  <Featured />
                </Route>
                <Route path="/random">
                  <Random />
                </Route>
                <Route path="/stats">
                  <Statistics />
                </Route>
                <Route path="/type/:typeId">
                  <TypeView />
                </Route>
              </Switch>
            </div>
          </Content>
          {/*<Footer style={{background: 'midnightblue'}}>*/}
          {/*  <a href="https://beian.miit.gov.cn" style={{color: 'white'}}>沪ICP备2021024798号-1</a>*/}
          {/*</Footer>*/}
        </Layout>
      </Layout>
    </Router>
  );

}

export default App;
