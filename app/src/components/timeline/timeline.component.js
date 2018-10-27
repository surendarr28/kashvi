import React, { Component } from 'react';
import { connect } from 'react-redux';
import './timeline.component.css';
import Slider from "react-slick";

import { getTimeline } from '../../actions/timelineAction'

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
};

class Timeline extends Component {

    componentDidMount = () => {
        this.props.getTimeline();
    }


    render = () => {
        if (this.props.timeline && this.props.timeline.list) {
            return (
                <div className="timeline-block">
                    <Slider {...settings}>

                        {this.props.timeline.list.map((e, index) => {
                            return <div className="timeline-cal"  key={index}> <span style={{ color: e.color }}> {e.display} <i className="fas fa-heart icon-size" ></i> M </span></div>;
                        })}
                    </Slider>
                </div>
            );
        } else {
            return ("no");
        }

    }

}


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    getTimeline: () => dispatch(getTimeline())
})

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);