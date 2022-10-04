import React, { Component } from 'react';
import { from } from 'rxjs';
import { map, filter, mergeMap, delay } from 'rxjs/operators';

let numberObservable = from([1, 2, 3, 4, 5]);
let squaredNumbers = numberObservable.pipe(
  filter(val => val > 2),
  mergeMap(val => from([val]).pipe(delay(1000 * val))),
  map((val) => val * val)
);

export class RxjsClass extends Component {

  constructor() {
    super();
    this.state = {
      currentNumber : 0
    }
  }

  componentDidMount() {
    this.subscription = squaredNumbers.subscribe(result => {
      this.setState({currentNumber: result});
    });
  }
  
  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <div>
        <p>Rxjs Class Component</p>
        <p>Current Number is : {this.state.currentNumber}</p>
        <hr/>
        <hr/>
        <hr/>
      </div>
    )
  }
}

export default RxjsClass