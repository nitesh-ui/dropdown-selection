import React, { useEffect, useState } from 'react';
import { from } from 'rxjs';
import { map, filter, mergeMap, delay } from 'rxjs/operators';

let numberObservable = from([1, 2, 3, 4, 5]);
let squaredNumbers = numberObservable.pipe(
  filter(val => val > 2),
  mergeMap(val => from([val]).pipe(delay(1000 * val))),
  map((val) => val * val)
);

const RxjsFunction = () => {

    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        let subscription = squaredNumbers.subscribe(result => {
            setCurrentNumber(result);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div>
            <p>Rxjs Function Component</p>
            <p>Current Number is : {currentNumber}</p>
        </div>
    )
}

export default RxjsFunction