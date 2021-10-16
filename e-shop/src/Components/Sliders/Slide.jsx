import React, {Component} from "react";

//const Slide = ([item]) => <div className="slide">{item}</div>
class Slide extends Component {
    //const ({ number }) = this.props;
    render () {
        return (
            <div className="slide">{this.props.number}</div>
        )
    }
}

export default Slide 