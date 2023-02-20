import React, {useState} from 'react';

class ClassCounter extends React.Component{

    constructor(props) {

        super(props);
        this.state={
            count:0
        }
        this.increm=this.increm.bind(this);
        this.decriment=this.increm.bind(this);
    }

     increm(){
        this.setState({count:this.state.count +1})



    }


     decriment(){
         this.setState({count:this.state.count-1})


    }



    render() {

        return (
            <div>
                <h1>{this.state.count}</h1>

                <button onClick={this.increm}>increm</button>
                <button onClick={this.decriment}>decriment</button>
            </div>


        )
    }
}

export default ClassCounter;