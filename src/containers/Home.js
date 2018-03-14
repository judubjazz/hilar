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
class HomePage extends Component {
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
        const {user} = this.props;
        return (
            <div>
                <header className="Header">
                    <Logo/>
                    <Navigation/>
                    <SearchBar onChange={this.handleChange} onKeyUp={this.handleKeyUp} searchTerm={this.state.searchTerm}/>
                    <UserProfile user={user} />
                </header>
                <Hero onClick={this.handleHeroClick}/>


                <TitleList title="Search Results" url={this.state.searchUrl}/>
                <TitleList title="Recommanded for You" url={user?user:''} />
                <TitleList title="Trending now"  url='trending' />
                <TitleList title="Most watched" url='most_watched' />
            </div>
        );
    }

}

// HomePage.propTypes = {
//     actions: PropTypes.object.isRequired,
//     data:PropTypes.array.isRequired,
//     isFetching:PropTypes.bool.isRequired,
//     username:PropTypes.string.isRequired,
// };

const mapStateToProps = state => {
  // //   console.log(state);
  // const { fetch } = state;
  // const {isFetching, data: data} = fetch|| {isFetching: true, data: []};
  //
  // return {
  //   data,
  //   isFetching,
  // }

    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
};


const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };




