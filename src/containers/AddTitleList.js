import React, {Component} from 'react'
import Logo from '../components/Logo';
import '../App.css';
import Item from '../components/Item'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import SearchBar from '../components/SearchBar.js'
import Image from 'react-image-resizer';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RightArrow from '../components/RightArrow.js';
import LeftArrow from '../components/LeftArrow.js';

import {selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit} from '../actions'

import data2 from '/home/ju/JetBrainsProjects/PycharmProjects/hilar/hilar/src/data/data' ;

/////////////////
/// COMPONENTS //
/////////////////

// Container
TitleList =({ dispatch}) => {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            mounted: false,
            index:0,
            dataBack:[]
        }
    };

    loadContent = () => {
        // servor + keywords ( search, trending, most+watched)
        let requestUrl = 'http://127.0.0.1:5000/' + this.props.url;
        console.log(requestUrl);

        fetch(requestUrl).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({data: data, dataBack:data, index:0});
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

export default AddTitleList


