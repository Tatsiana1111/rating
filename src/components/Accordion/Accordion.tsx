import React from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>{ props.title }</h3>
    )
}
function AccordionBody(props: any) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion