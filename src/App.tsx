import * as React from 'react';
import './App.css';
import {NewComponent} from "./components/newcomponent";

function transform(offset: number) {
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return {
        transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin},
     0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
    };
}


class App extends React.Component {
    public state = {styleOne: {}, styleTwo: {}};

    public onMouseMove = (event: { clientX: number; clientY: number; }) => {
        this.setState({
            styleOne: transform(-event.clientX / event.clientY),
            styleTwo: transform(event.clientX / event.clientY)
        });
    };

    public render() {

        const style1 = {
            backgroundColor: 'blue',
            color: 'white'
        };

        const buttonText = <>Submit</>;

        return (
            <div>
                <NewComponent label={this.getLabel()} style={style1} buttonText={buttonText}/>
                {this.getDiv()}
            </div>
        );
    }

    private getDiv() {
        return <div>Current time:<h3>{this.getTime()}</h3></div>;
    }

    private getLabel() {
        return <>Enter name:</>;
    }

    private getTime() {
        return (new Date()).toLocaleDateString();
    }
}

export default App;
