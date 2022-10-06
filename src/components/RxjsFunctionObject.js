import { Component } from "react";
import "./styles.css";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

const users = {
  data: [
    { id: 1, status: "active", age: 14 },
    { id: 1, status: "inactive", age: 12 },
    { id: 1, status: "active", age: 42 },
    { id: 1, status: "inactive", age: 42 },
    { id: 1, status: "active", age: 13 },
    { id: 1, status: "inactive", age: 75 },
    { id: 1, status: "inactive", age: 43 },
    { id: 1, status: "inactive", age: 54 },
    { id: 1, status: "active", age: 7 },
    { id: 1, status: "active", age: 17 }
  ]
};

let observable = new Observable((subscriber) => {
  subscriber.next(users);
}).pipe(
  map((item) => item?.data),
  filter((users) => users.length >= 10),
  map((users) => {
    return users.filter((user) => user.status === "active");
  }),
  map((users) => {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
  }),
  map((average) => {
    if (average < 18) throw new Error(`Average age is too small (${average})`);
    else return average;
  }),
  map((average) => `The average age is ${average}`)
);

let observer = {
  next: (x) => console.log("Observer got a next value: " + x),
  error: (err) => console.error("Observer got an error: " + err),
  complete: () => console.log("Observer got a complete notification")
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      averageNumber: 0
    };
  }

  componentDidMount() {
    this.subscription = observable.subscribe(() => {
      this.setState({ averageNumber: observer.next });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <p>Average Number is : {this.state.averageNumber}</p>
      </div>
    );
  }
}

export default App;
