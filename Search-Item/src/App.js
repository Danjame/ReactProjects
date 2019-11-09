import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Input } from 'antd';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            result: [],
        };
        this.getItem = this.getItem.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        // this.getDetail = this.getDetail.bind(this);
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
                  onSearch={this.handleSearch}
                  />
                </div>
                <Menu theme="dark" mode="inline">
                　{this.getItem()}
                </Menu>
              </Sider>

              <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />

                

                <Footer style={{ textAlign: 'center' }}>Search Item</Footer>
              </Layout>
            </Layout>)
    }

    getItem() {
        return (
            this.state.result.map((item, index) => (
                <Menu.Item key={ index } onClick = {this.getDetail.bind(this, index)} >
                  <img src={item.bg_pic} alt="" style={{width: '150px'}}/>
                </Menu.Item>
            ))
        )
    }

    getDetail(index) {
        console.log(this.state.result[index].content);
        this.showDetail.bind(this. index);
        // console.log(index);
    }

    showDetail(index) {
      // let index = index;
        return (
            <Content style={{ margin: '24px 16px 0' }}>
              {/*<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>*/}
              {this.state.result[index].content.map(index=>(
console.log(index)
                ))}
            </Content>
        )
    }

    handleSearch() {
        console.log(this.state)
    }

    componentDidMount() {
        axios.get('https://api.apiopen.top/musicRankings').then((res) => {
            if (res.data.code === 200) {
                const result = res.data.result;
                this.setState({
                    result
                })
                console.log(this.state)
                return;
            }
        })
    }
}

export default SearchItem;