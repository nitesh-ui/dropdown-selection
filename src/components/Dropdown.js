import React, { useState } from 'react';
import Select from 'react-select';
import Spinner from './Spinner';

function Dropdown() {
    let dropdownList = [
        {
            value: "Nitesh",
            label: "Nitesh"
        },
        {
            value: "Madhav",
            label: "Madhav"
        },
        {
            value: "Pralay",
            label: "Pralay"
        },
        {
            value: "Somnath",
            label: "Somnath"
        }
    ];

    const [selectOption, setSelectOption] = useState("");
    const [prevOption, setPrevOption] = useState("");
    const [allOption, setAllOption] = useState("");
    const [isLoading, setLoading] = useState(false);

    const selectHandler = (event) => {
        if (event.value !== selectOption){
            setSelectOption(event.value);
            setLoading(true);

            setTimeout(() => {
                setLoading(false)
            }, 2000);

            console.log("Current Value--> " + event.value);

            if(selectOption !== "") {
                setPrevOption(selectOption);
                setAllOption(selectOption);

                console.log("Previous Value--> " + selectOption);

                setLoading(true);

                setTimeout(() => {
                    setLoading(false)
                }, 2000);
            }
            if(prevOption !== "") {
                //setAllOption(prevOption + " " + allOption);
                setAllOption(selectOption + " " + allOption);

                console.log("All Value--> " + selectOption); 
                console.log("All Value New--> " + prevOption);

                setLoading(true);
                
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
            }
        }
        
    }

    return (
        <div className="container my-3">
            <div className="row">
                {isLoading && <Spinner/>}
                <div className="col-md-4">
                    <Select options={dropdownList} onChange={selectHandler}/>
                </div>
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            Previous Value : {prevOption} 
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            Current Value : {selectOption} 
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
export default Dropdown