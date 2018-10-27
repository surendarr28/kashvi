import { TYPES } from './actionTypes';

export const getTimeline = () => dispatch => {
    dispatch({
        type: TYPES.TIMELINE_LIST,
        payload: [{
            id:1,
            display:1,
            slogan: "First Month",
            color: "#FF5722",
            images: [
                "images/68939.jpg"
            ]
        },
        {
            id:2,
            display:2,
            slogan: "First Month",
            color: "#2196F3",
            images: [
                "images/68939.jpg"
            ]
        },
        {
            id:3,
            display:3,
            slogan: "First Month",
            color: "#9C27B0",
            images: [
                "images/68939.jpg"
            ]
        },
        {
            id:4,
            display:4,
            slogan: "First Month",
            color: "#795548",
            images: [
                "images/68939.jpg"
            ]
        },
        {
            id:5,
            display:5,
            slogan: "First Month",
            color: "#4CAF50",
            images: [
                "images/68939.jpg"
            ]
        },
        {
            id:6,
            display:6,
            slogan: "First Month",
            color: "#ea3b63",
            images: [
                "images/68939.jpg"
            ]
        }]
    })
}