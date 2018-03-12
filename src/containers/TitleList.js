import React, {Component} from 'react'
import Logo from '../components/Home/Logo';
import '../App.css';
import Item from '../components/Home/Item'
import Hero from '../components/Home/Hero'
import Navigation from '../components/Home/Navigation'
import SearchBar from '../components/Home/SearchBar.js'
import Image from 'react-image-resizer';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RightArrow from '../components/Home/RightArrow.js';
import LeftArrow from '../components/Home/LeftArrow.js';

import {selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit} from '../actions/home.actions'

import data2 from '/home/ju/JetBrainsProjects/PycharmProjects/hilar/hilar/src/data/data' ;

/////////////////
/// COMPONENTS //
/////////////////

// Container
class TitleList extends Component {
    static propTypes = {
        selectedSubreddit: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired,
      };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            mounted: false,
        }
    };

    loadContent = () => {
        // servor + keywords ( search, trending, most+watched)
        let requestUrl = 'http://127.0.0.1:5000/' + this.props.url;
        console.log(requestUrl);

        fetch(requestUrl).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({data: data});
        }).catch((err) => {
            console.log("There has been an error");
        });
    };

    viewMore = () => {
        alert(this.state.data.results);
        console.log(this.state.data);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.url !== this.props.url && nextProps.url !== '') {
            this.setState({mounted: true, url: nextProps.url}, () => {
                this.loadContent();
            });

        }
    }

    componentDidMount() {
        if (this.props.url !== '') {
            this.loadContent();
            this.setState({mounted: true});
        }
    }

    render() {
        let titles = '';
        if (this.state.data.results) {
            titles = this.state.data.results.map(function (title,i ) {
                console.log('titles : '+  title)
                if (i < 5) {
                    return (
                        <Item key={i} title={title[1]} score={title[3]} overview={title[2]} backdrop={title[4]}/>
                    );

                } else {
                    return (<div key={i}></div>);
                }
            });
        }

        return (
            <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
                <div className="Title">
                    <h1>{this.props.title}</h1>
                    <h1 onClick={this.viewMore}>view more</h1>
                    <div className="titles-wrapper">
                        {titles}
                    </div>
                </div>
            </div>
        );
    }
};
const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state;
  const {isFetching, lastUpdated, data: posts} = postsBySubreddit[selectedSubreddit] || {
    isFetching: true, data: []
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
};

export default connect(mapStateToProps)(TitleList)


