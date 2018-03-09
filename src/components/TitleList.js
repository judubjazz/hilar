import React, {Component} from 'react'

import '../App.css';
import Item from '../components/Item'

import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import {selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit, fetchData} from '../actions'



/////////////////
/// COMPONENTS //
/////////////////

// Container
class TitleList extends Component {
    // static propTypes = {
    //     selectedSubreddit: PropTypes.string.isRequired,
    //     data: PropTypes.array.isRequired,
    //     isFetching: PropTypes.bool.isRequired,
    //     dispatch: PropTypes.func.isRequired,
    //     url:PropTypes.string.isRequired,
    //   };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    };

    // loadContent = () => {
    //     // servor + keywords ( search, trending, most+watched)
    //     let requestUrl = 'http://127.0.0.1:5000/' + this.props.url;
    //     console.log(requestUrl);
    //
    //     fetch(requestUrl).then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         this.setState({data: data});
    //     }).catch((err) => {
    //         console.log("There has been an error");
    //     });
    // };

    viewMore = () => {
        alert(this.props.data);
        console.log(this.props.data);
    };

    componentWillReceiveProps(nextProps) {
        // if (nextProps.url === 'trending') {
        //     this.props.actions.selectSubreddit('trending');
        //     // const { dispatch } = nextProps;
        //     this.props.actions.fetchPostsIfNeeded(nextProps.url);
        //
        // }
        const {data} = this.props;
        console.log('data CWRP :' + data);
        // if (nextProps.url !== this.props.url && nextProps.url !== '') {
        //     const {dispatch,selectedSubreddit } = this.props;
        //     // dispatch(fetchPostsIfNeeded(this.props.url));
        //     // fetchPostsIfNeeded(this.props.url)
        //     dispatch(fetchData(this.props.url));
        // }
    }

    componentDidMount() {
        // if (this.props.url !== '') {
        //     this.loadContent();
        //     this.setState({mounted: true});
        // }


        const { dispatch, selectedSubreddit } = this.props;
        dispatch(selectSubreddit(this.props.url));
        if (this.props.url !=='' ) {
            // this.props.actions.selectSubreddit(this.props.url);
            const { dispatch, selectedSubreddit } = this.props;
            console.log('selected sub: ' + selectedSubreddit);
            dispatch(fetchData(this.props.url));
        }

        // const {data} = this.props;
        // console.log('data CDM :' + data);
    }

    render() {
        const { data} = this.props;
        let titles = '';
        // console.log('selectsub :' + selectedSubreddit);
        console.log('data :' + data);
        // console.log('is fetching : ' + isFetching);


        if (data) {
            titles = data.map(function (title,i ) {
                console.log('titles : '+  title);
                if (i < 5) {
                    return (
                        <Item key={i} title={title[1]} score={title[3]} overview={title[2]} backdrop={title[4]}/>
                    );

                } else {
                    return (<div key={i}></div>);
                }
            });
        }

        console.log('titles : ' + titles);
        return (
            <div ref="titlecategory" className="TitleList" data-loaded={true}>
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
}

TitleList.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    url:PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired,
};
const mapStateToProps = state => {
  //   console.log(state);
  const { fetch } = state;
  const {isFetching, data: data} = fetch|| {isFetching: true, data: []};

  return {
    data,
    isFetching,
  }
};

// const mapDispatchToProps = (dispatch)=> {
// 	return {
// 		actions: bindActionCreators(actions, dispatch)
// 	};
// };

export default connect(mapStateToProps)(TitleList)


