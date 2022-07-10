import React, {useState} from "react";


type StarPropsType = {
    selected: boolean
}


function Star(props: StarPropsType) {
    console.log('Star rendering')
    if (props.selected === true) {
        return <span><b>*STAR</b></span>
    } else {
        return <span>*STAR*</span>
    }
}

export function UncontrolledRating() {
    let [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => {
                setValue(value = 1)
            }}>1
            </button>
            <Star selected={value > 1}/>
            <button onClick={() => {
                setValue(value = 2)
            }}>2
            </button>
            <Star selected={value > 2}/>
            <button onClick={() => {
                setValue(value = 3)
            }}>3
            </button>
            <Star selected={value > 3}/>
            <button onClick={() => {
                setValue(value = 4)
            }}>4
            </button>
            <Star selected={value > 4}/>
            <button onClick={() => {
                setValue(value = 5)
            }}>5
            </button>
        </div>
    )

}