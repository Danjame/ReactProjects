import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Input } from 'antd';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            result: [],
        }
    }

    render() {
        return (
            <Layout>
              <Sider
                breakpoint="md"
                collapsedWidth="0"
              >
              <div style = {{ padding: "12px"}}>
                <Search
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                />
                </div>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                      <Icon type="user" />
                      <span className="nav-text">nav 1</span>
                    </Menu.Item>
                  </Menu>
              </Sider>

              <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                  <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Search Item</Footer>
              </Layout>
            </Layout>)
    }

    componentDidMount() {
        axios.get('https://api.apiopen.top/musicRankings').then((res) => {
          console.log(res.data)
            this.setState(()=>({
              result: res.data.result

            }))
        })
        console.log(this.state)
    }
}

export default SearchItem;