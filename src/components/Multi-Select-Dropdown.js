import React, { useEffect, useRef, useState } from 'react';
import "../App.css";

const MultiSelectDropdown = (props) => {

    const {optionList, defaultValue, setMultiOption} = props;
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue || []);

    const ref = useRef(null);

    const headingClick = () => {
        setOpen((prev) => !prev);
    }

    const selectAllItem = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;

        if (checked) {
            setSelectedOption(optionList);
        } else {
            setSelectedOption([]); 
        }
    }

    const handleOnChange = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        console.log(value + " is " + checked);

        if (checked) {
            setSelectedOption([...selectedOption, value]);
        } else {
            setSelectedOption(selectedOption.filter((e) => e !== value)); 
            setMultiOption(defaultValue.filter((e) => e !== value));
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && open) {
                setOpen(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });

    return (
        <div className='dropdown' ref={ref}>
            <h4>MultiSelect Dropdown</h4>
            <div className='dropdown-heading' onClick={headingClick} style={{overflow: "hidden", textOverflow: "ellipsis"}}>
                {selectedOption.length ? selectedOption.join(",") : "Select"}<i className='arrow-down'></i>
            </div>
            {open && (
                <div className='dropdown-list'>
                    <ul>
                        <li>
                            <input type="checkbox" 
                                checked={selectedOption.join() == optionList.join() ? true : false}
                                value="All" name="All" onChange={selectAllItem}/>
                            <label htmlFor="All">All</label>
                        </li>
                        {optionList.map((item) => (
                            <>
                                <li key={item}>
                                    <input type="checkbox" 
                                        checked={selectedOption.includes(item) ? true : false} 
                                        value={item} name={item} onChange={handleOnChange} />
                                    {item}
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            )}
            <div style={{width: "170px", overflow: "hidden", textOverflow: "ellipsis"}}>Options: <span className='item'>{selectedOption.join(",")}</span></div>
        </div>
    )
}

export default MultiSelectDropdown
