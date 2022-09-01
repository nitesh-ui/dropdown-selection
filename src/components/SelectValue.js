import React, { Component } from 'react';
import Select from 'react-select';

let options = [
    {value: "Nitesh",label: "Nitesh"},
    {value: "Madhav", label: "Madhav"},
    {value: "Pralay", label: "Pralay"},
    {value: "Somnath", label: "Somnath"}
];

class SelectValue extends Component {

    constructor() {
        super();
        this.state = {
            selectedOption: '',
            prevOption: '',
            allOption: ''
        }
    }

    selectHandler = (event) => {
        if (event.value !== this.state.selectedOption){
            this.setState({ 
                selectedOption: event.value
            });
            console.log('Selected Value--> ' + event.value);
            if(this.state.selectedOption !== "") {
                this.setState({
                    prevOption: this.state.selectedOption,
                },() => {
                    console.log('Previous Value:- ' + this.state.prevOption);
                    if(this.state.prevOption !== "") {
                        this.setState({
                            allOption: this.state.allOption + " " + this.state.prevOption
                        })
                    }  console.log('All Value:- ' + this.state.allOption);
                })
            }
        }
        
    }

    render() {
        const {selectedOption, prevOption,allOption} = this.state;
        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4">
                        <Select options={options} value={selectedOption.label} onChange={this.selectHandler}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                Previous Value : {prevOption}
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                Current Value : {selectedOption}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                Overall Value : {allOption}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectValue
