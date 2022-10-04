import React, { Component } from 'react';
import Select from 'react-select';
import Spinner from './Spinner';

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
            allOption: '',
            isLoaded: false
        }
    }

    selectHandler = (event) => {
        if (event.value !== this.state.selectedOption){
            this.setState({ 
                selectedOption: event.value,
                isLoaded: true
            });

            setTimeout(() => {
                this.setState({ 
                    isLoaded: false
                });
            }, 2000);
            
            console.log('Selected Value--> ' + event.value);
            if(this.state.selectedOption !== "") {
                this.setState({
                    prevOption: this.state.selectedOption,
                    isLoaded: true
                },() => {
                    console.log('Previous Value:- ' + this.state.prevOption);
                    if(this.state.prevOption !== "") {
                        this.setState({
                            allOption: this.state.allOption + " " + this.state.prevOption,
                            isLoaded: true
                        })
                    }  console.log('All Value:- ' + this.state.allOption);
                })
                
                setTimeout(() => {
                    this.setState({
                        isLoaded: false
                    },() => {
                        if(this.state.prevOption !== "") {
                            this.setState({
                                isLoaded: false
                            })
                        }  
                    })
                }, 2000);
                
            }
        }
        
    }

    render() {
        const {selectedOption, prevOption, allOption} = this.state;
        return (
            <div className="container my-3">
                {this.state.isLoaded && <Spinner/>}
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
                <hr/>
                <hr/>
                <hr/>
            </div>
        )
    }
}

export default SelectValue