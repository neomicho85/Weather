import React, {Component} from 'react';
import Header from './Header';
import Clima from './Clima';
import Temperature from './Temperature';
import { connect } from 'react-redux';
import { getLocation, getWeather } from '../redux/actions/index';

class Weather extends Component {

    componentDidMount() {
        const location = this.props.getLocation(); 
        location.then( lo => {
            this.props.getWeather(lo.payload.lat, lo.payload.lon);
        })
    }

    render() {
        return ( 
            <div className="card">         
                <Header city={this.props.currentWeather} />
                <div className="two-columns">
                    <Clima clima={this.props.currentWeather} />
                    <Temperature temp={this.props.currentWeather} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        location: state.location,
        currentWeather: state.currentWeather
    }
}

export default connect(
    mapStateToProps,
    { getLocation, getWeather }
)(Weather)