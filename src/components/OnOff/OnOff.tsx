import {useState} from "react";

type PropsType = {
    // on: boolean
}

export const OnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
        marginLeft: "3px"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
        marginLeft: "3px"
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (<div>
        <div style={onStyle} onClick={() => {
            setOn(on = true)
        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            setOn(on = false)
        }}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>)

}