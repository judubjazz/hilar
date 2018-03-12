import React, {Component} from 'react'
import Logo from '../components/Home/Logo';
import './Home.css';
import TitleList from '../components/Home/TitleList.js'
import Hero from '../components/Home/Hero'
import Navigation from '../components/Home/Navigation'
import UserProfile from '../components/Home/UserProfile.js'
import SearchBar from '../components/Home/SearchBar.js'
import Image from 'react-image-resizer';

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import * as actions from '../actions/home.actions';
import {fetchData} from "../actions/home.actions";



/////////////////
/// COMPONENTS //
/////////////////

// Container
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchUrl: '',
            username:'',
        }
    };


    handleKeyUp = (e) => {
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            let searchUrl = this.state.searchTerm;
            this.setState({searchUrl: searchUrl});
        }
    };

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value});
    };

    handleLogin = () => {

    };
    // handleData = (endPoint) => {
    //     let test  = fetchData(endPoint);
    //     console.log('test' + test.data);
    // };
    //
    // handleUpdate = (endPoint) => {
    //     let test = this.props.actions.selectSubreddit(endPoint);
    // };
    handleHeroClick= ()=>{

    };
    render() {
        return (
            <div>
                <header className="Header">
                    <Logo/>
                    <Navigation/>
                    <SearchBar onChange={this.handleChange} onKeyUp={this.handleKeyUp} searchTerm={this.state.searchTerm}/>
                    <UserProfile onClick={this.handleLogin}/>
                </header>
                <Hero onClick={this.handleHeroClick}/>


                <TitleList title="Search Results" url={this.state.searchUrl}/>
                <TitleList title="Top picks for You" url={this.state.username} />
                <TitleList title="Trending now"  url='trending' />
                <TitleList title="Most watched" url='most_watched' />
            </div>
        );
    }

}

// App.propTypes = {
//     actions: PropTypes.object.isRequired,
//     data:PropTypes.array.isRequired,
//     isFetching:PropTypes.bool.isRequired,
// };
//
// const mapStateToProps = state => {
//   //   console.log(state);
//   const { fetch } = state;
//   const {isFetching, data: data} = fetch|| {isFetching: true, data: []};
//
//   return {
//     data,
//     isFetching,
//   }
// };
// const mapDispatchToProps = (dispatch)=> {
// 	return {
// 		actions: bindActionCreators(actions, dispatch)
// 	};
// };
export default Home



