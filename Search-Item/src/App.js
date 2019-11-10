import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Input } from 'antd';
import axios from 'axios';
import SingleItem from './singleItem.js';
import SearchResult from './searchResult.js';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const timer = null;

class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            result: [],
            current: [],
            isShow: 'none',
            displayImg: '',
            inputValue: '',
            searchList: [],
            searchedItem: null
        };
        this.getItem = this.getItem.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.handInputValue = this.handInputValue.bind(this);
        this.selectSearchItem = this.selectSearchItem.bind(this);
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
                <div style = {{ padding: 12}}>
                  <Search
                  placeholder="input search text"
                  onChange = {this.handInputValue}
                  allowClear = {true}
                  />
                </div>
                <SearchResult searchList = {this.state.searchList}
                              selectSearchItem = {this.selectSearchItem}
                />
                <Menu theme="dark" mode="inline">
                　{this.getItem()}
                </Menu>
              </Sider>

              <Layout>
                <Header style={{ background: '#fff', padding: 0, textAlign: 'center', fontSize: 20 }}>Search Your Favorite Song</Header>
                <Content style={{ margin: '24px 16px 0'}}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360, overflow: 'hidden' }}>
                  {this.showDetails()}
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
                  <img src={item.bg_pic} alt="" style={{width: 150}}/>
                </Menu.Item>
            ))
        )
    }

    getDetail(index) {
        this.setState({
            current: this.state.result[index].content,
            searchedItem: null
        });
    }

    showSingleItem = (item) => {
        if (this.state.isShow === 'none') {
            this.setState({
                isShow: 'block',
                displayImg: item.pic_big
            });
        } else {
            this.setState({
                isShow: 'none'
            })
        }
    }

    handInputValue(e) {
        this.setState({
            inputValue: e.target.value
        });
        if (this.timer) {
            clearTimeout(this.timer)
        };
        this.timer = setTimeout(() => {
            let keywords = [];
            if (this.state.inputValue === '') {
                keywords.length = 0;
            } else {
                for (let i in this.state.result) {
                    this.state.result[i].content.forEach(item => {
                        if (item.album_title.indexOf(this.state.inputValue) > -1 ||
                            item.author.indexOf(this.state.inputValue) > -1) {
                            keywords.push(item);
                        } else {
                            return;
                        }
                    })
                }

            }
            this.setState({
                searchList: keywords
            })
        }, 100);

    }

    handleSearch() {
        console.log(this.state)
    }

    selectSearchItem(item) {
        this.setState({
            searchedItem: item
        })
    }


    showDetails() {
        if (this.state.searchedItem) {
            return (
                <div>
          <div style={{textAlign: 'center'}} >
          <img src={this.state.searchedItem.pic_big} alt="" onClick = {this.showSingleItem.bind(this, this.state.searchedItem)}/>
          </div>
          <div style={{textAlign: 'center'}}>Title:</div>
          <div style={{textAlign: 'center'}}>{this.state.searchedItem.album_title}</div>
          <div style={{textAlign: 'center'}}>Author:</div>
          <div style={{textAlign: 'center'}}>{this.state.searchedItem.author}</div>
          </div>
            )
        } else {
            return (
                this.state.current.map((item, index) => (
                    <div 
                 key={ index } 
                 style={{ float:'left', marginBottom: '16px', width: 202, height: 200}}>
                   <div style={{textAlign: 'center'}} >
                   <img src={item.pic_small} alt="" onClick = {this.showSingleItem.bind(this, item)}/>
                   </div>
                   <div style={{textAlign: 'center'}}>Title:</div>
                   <div style={{textAlign: 'center'}}>{item.album_title}</div>
                   <div style={{textAlign: 'center'}}>Author:</div>
                   <div style={{textAlign: 'center'}}>{item.author}</div>
                 </div>
                ))
            )
        }
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