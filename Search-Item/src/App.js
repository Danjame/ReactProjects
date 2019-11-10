import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Input } from 'antd';
import axios from 'axios';
import SingleItem from './singleItem.js';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            result: [],
            current: [],
            isShow: 'none',
            displayImg: ''
        };
        this.getItem = this.getItem.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        // this.showSingleItem = this.showSingleItem.bind(this);
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
                <Header style={{ background: '#fff', padding: 0, textAlign: 'center', fontSize: '28px' }}>Search Your Favorite Song</Header>
                <Content style={{ margin: '24px 16px 0'}}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360, overflow: 'hidden' }}>
               {this.state.current.map((item, index)=>(
                 <div 
                 key={ index } 
                 style={{ float:'left', marginRight:'16px', marginBottom: '16px', width:'200px', height: '200px'}}>
                   <div style={{textAlign: 'center'}} >
                   <img src={item.pic_small} alt="" onClick = {this.showSingleItem.bind(this, item)}/>
                   </div>
                   <div style={{textAlign: 'center'}}>Title:</div>
                   <div style={{textAlign: 'center'}}>{item.album_title}</div>
                   <div style={{textAlign: 'center'}}>Author:</div>
                   <div style={{textAlign: 'center'}}>{item.author}</div>
                 </div>
                 )
                )}
              </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>Search Item</Footer>
              </Layout>
              <div style = {{ display: this.state.isShow }}>
                <SingleItem displayImg = {this.state.displayImg} showSingleItem = {this.showSingleItem}/>
              </div>
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
        this.setState({
            current: this.state.result[index].content,
        });
    }

    showSingleItem = (item) => {
      console.log(this.state.displayImg);
        if (this.state.isShow === 'none') {
            this.setState({
                isShow: 'block',
                displayImg: item.pic_big
            })
        } else {
            this.setState({
                isShow: 'none'
            })
        }
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
                return;
            }
        })
    }
}

export default SearchItem;