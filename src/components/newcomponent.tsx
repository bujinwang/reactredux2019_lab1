import * as React from "react";

export class NewComponent extends React.Component
    <{ label: any, style: { backgroundColor: string; color: string }, buttonText: any }> {
    public render() {
        return <>
            <label className="label" htmlFor="name">{this.props.label}</label>
            <input id="name" type="text"/>
            <button style={this.props.style}>{this.props.buttonText}</button>
        </>;
    }
}