import {PureComponent} from "react";

class Example extends PureComponent  {
    constructor(props) {
        super(props);
        this.state = {
            favoritecolor: "red"
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            favoritecolor: props.color
        }
    }

    render(){
       return (
        <>
            <h1>this is my favorite color {this.state.favoritecolor} </h1>
        </>
       )
    }
}

export default Example; 