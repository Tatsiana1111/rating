import React from "react";

export type AccordionCollapsedType = boolean

type AccordionPropsType = {
    titleValue: string
    collapsed: AccordionCollapsedType
    onChange: () => void
}
type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    collapsed: AccordionCollapsedType
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}> {props.title}</h3>
    )
}

function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion