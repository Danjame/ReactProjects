import React, { Component } from 'react';
import { Layout, Menu, Input } from 'antd';
import axios from 'axios';
import SingleItem from '../components/singleItem/singleItem.js';
import SearchResult from '../components/searchResult/searchResult.js';
import DefaultDetails from '../components/details/defaultDetails.js';
import SearchDetails from '../components/details/searchDetails.js';

import 'antd/dist/antd.css';
import './App.css';

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
        this.getMenuItems = this.getMenuItems.bind(this);
        this.getItemDetail = this.getItemDetail.bind(this);
        this.showItemImg = this.showItemImg.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.selectSearchItem = this.selectSearchItem.bind(this);
    }

    render() {
        return (
            <Layout>
              <Sider
                breakpoint="md"
                collapsedWidth="0"
              >
                <div className="searchWrapper">
                  <Search
                    placeholder="Search"
                    onChange = {this.handleInputValue}
                    allowClear = {true}
                  />
                </div>
                <SearchResult 
                  searchList = {this.state.searchList}
                  selectSearchItem = {this.selectSearchItem}
                />
                <Menu theme="dark" mode="inline">
                　{this.getMenuItems()}
                </Menu>
              </Sider>

              <Layout>
                <Header className="leftHeader">Search Your Favorite Song</Header>
                <Content className="leftContent">
                  <div className="detailsWrapper">
                    {this.state.searchedItem?
                      <SearchDetails
                      searchedItem = {this.state.searchedItem}
                      showItemImg = {this.showItemImg}
                      />:
                      <DefaultDetails
                      current={this.state.current}
                      showItemImg = {this.showItemImg}
                      />
                    }
                  </div>
                </Content>
                <Footer className="footer">Search Item</Footer>
              </Layout>
              <div style = {{ display: this.state.isShow }}>
                <SingleItem 
                  displayImg = {this.state.displayImg} 
                  showItemImg = {this.showItemImg}
                />
              </div>
            </Layout>)
    }

    getMenuItems() {
        return (
            this.state.result.map((item, index) => (
                <Menu.Item
                  key={ index } 
                  onClick = {()=>this.getItemDetail(index)}
                >
                  <img src={item.bg_pic} alt="" style={{width: 150}}/>
                </Menu.Item>
            ))
        )
    }

    getItemDetail(index) {
        this.setState({
            current: this.state.result[index].content,
            searchedItem: null
        });
    }

    showItemImg(item) {
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

    handleInputValue(e) {
        this.setState({
            inputValue: e.target.value
        });
        if (this.timer) {
            clearTimeout(this.timer)
        };
        this.timer = setTimeout(() => {
            let keywords = [];
            if (!this.state.inputValue) {
                keywords.length = 0;
            } else {
                for (let i in this.state.result) {
                    this.state.result[i].content.forEach(item => {
                        if (item.album_title.includes(this.state.inputValue) || item.author.includes(this.state.inputValue)) {
                            keywords.push(item);
                        }
                    })
                }
            }
            this.setState({
                searchList: keywords
            })
        }, 100);
    }

    selectSearchItem(item) {
        this.setState({
            searchedItem: item
        })
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