import * as React from "react";
import "./Page.css";

export function Page(props) {
    return (
        <div className='page'>
            <div className='page-content'>
                <h1>{props.title}</h1>
                {props.children}
            </div>
        </div>
    );
}