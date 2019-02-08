import * as React from 'react';
import './App.css';

function transform(offset: number){
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return {transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin},
     0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`};
}


class App extends React.Component {
    public state = {styleOne: {}, styleTwo: {}};

    public onMouseMove = (event: { clientX: number; clientY: number; })=>{
        this.setState({
            styleOne: transform(-event.clientX/ event.clientY),
            styleTwo: transform(event.clientX/event.clientY)
        });
    };

    public render() {
    return (
        <div className="App" onMouseMove={this.onMouseMove}>
            <div className="panel" style={this.state.styleOne}/>
            <div className="panel" style={this.state.styleTwo}/>
        </div>
    );
  }
}

export default App;
