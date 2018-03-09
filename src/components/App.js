import React, {Component} from 'react';
import Logo from './Logo.js';
import './App.css';
import Image from 'react-image-resizer';


/////////////////
/// COMPONENTS //
/////////////////

// Container
export default class App extends Component {
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

    render() {
        return (
            <div>
                <header className="Header">
                    <Logo/>
                    <Navigation/>
                    <div id="search" className="Search">
                        <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search"
                               placeholder="Search for a title..." value={this.state.searchTerm}/>
                    </div>
                    <UserProfile/>
                </header>
                <Hero/>


                <TitleList title="Search Results" url={this.state.searchUrl}/>
                <TitleList title="Top picks for You" url={this.state.username}/>
                <TitleList title="Trending now" url='trending'/>
                <TitleList title="Most watched" url='most_watched'/>
            </div>
        );
    }
};


// Navigation
class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation" className="Navigation">
                <nav>
                    <ul>
                        <li>Browse</li>
                        <li>My list</li>
                        <li>Top picks</li>
                        <li>Recent</li>
                    </ul>
                </nav>
            </div>
        );
    }
};

// User Profile
class UserProfile extends React.Component {
    handleLogin = () => {

    };

    render() {
        return (
            <div className="UserProfile">
                <div className="User">
                    <a className="name" onClick={this.handleLogin}>Login</a>
                    <div className="image">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" alt="login"/>
                    </div>
                </div>
            </div>
        );
    }
};

//////////
// Hero //
//////////
/**
 * main container
 */
let background_image = require('./data/peru_landscape.jpg');
let logo = require('./data/logo.png');

//src="http://www.returndates.com/backgrounds/narcos.logo.png"
class Hero extends React.Component {
    render() {
        return (
            <div id="hero" className="Hero" style={{backgroundImage: 'url(' + background_image + ')'}}>
                <div className="content">
                    <Image
                        src={logo}
                        alt="apples in the bowl"
                        width={240}
                        height={240}
                        //style={style.image}
                    />

                    <h2></h2>
                    <p>Buy the best productos from el Peru. Best precios garantee, ou argent remis</p>
                    <div className="button-wrapper">
                        <HeroButton primary={true} text="Buy now"/>
                        <HeroButton primary={false} text="+ My list"/>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        );
    }
};

// Hero Button
/**
 * button buy it now and +list
 */
class HeroButton extends React.Component {
    handleClick = () => {
        if (this.props.primary) {
            //hanlde buy it now
        } else {
            //handle +;list
        }
    };

    render() {
        return (
            <a href="#" className="Button" onClick={this.handleClick}
               data-primary={this.props.primary}>{this.props.text}</a>
        );
    }
};

////////////////
// Title List //
////////////////

// Title List Container
/**
 * div inline to show products
 * ex:trending now
 */
class TitleList extends React.Component {
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

// Title List Item
/**
 * description of the item inside a title
 */
class Item extends React.Component {
    componentWillReceiveProps(nextProps, prevProps) {

    }

    render() {
        return (
            <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}}>
                <div className="overlay">
                    <div className="title">{this.props.title}</div>
                    <div className="rating">{this.props.score} / 10</div>
                    <div className="plot">{this.props.overview}</div>
                    <ListToggle/>
                </div>
            </div>
        );
    }
};

// ListToggle
class ListToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggled: false,}
    };

    handleClick = () => {
        if (this.state.toggled === true) {
            this.setState({toggled: false});
        } else {
            this.setState({toggled: true});
        }
    };

    render() {
        return (
            <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
                <div>
                    <i className="fa fa-fw fa-plus"></i>
                    <i className="fa fa-fw fa-check"></i>
                </div>
            </div>
        );
    }
};

