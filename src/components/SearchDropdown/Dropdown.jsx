import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    const openDrop = () => {
        setOpen(!open);
    }

    const closeDrop = (index) => {
        setSelected(index);
        setOpen(false);
    }

    return (
        <>
            <div className="selectDropWrapper cursor position-relative">
                <span className="openSelect" onClick={openDrop}>All Categories</span>
                {
                    open === true &&
                    <div className="selectDrops">
                        <div className="searchField">
                            <input type="text" />
                        </div>
                        <ul className="searctResults">
                            <li onClick={() => closeDrop(0)} className={`${selected === 0 ? 'active' : ''}`}>All Categories</li>
                            <li onClick={() => closeDrop(1)} className={`${selected === 1 ? 'active' : ''}`}>Milks & Daairies</li>
                            <li onClick={() => closeDrop(2)} className={`${selected === 2 ? 'active' : ''}`}>Wines & Drinks</li>
                            <li onClick={() => closeDrop(3)} className={`${selected === 3 ? 'active' : ''}`}>Clothing & Beauty</li>
                            <li onClick={() => closeDrop(4)} className={`${selected === 4 ? 'active' : ''}`}>Fresh Food & Toy</li>
                            <li onClick={() => closeDrop(5)} className={`${selected === 5 ? 'active' : ''}`}>Fast Food</li>
                            <li onClick={() => closeDrop(6)} className={`${selected === 6 ? 'active' : ''}`}>Baking Meterial</li>
                            <li onClick={() => closeDrop(7)} className={`${selected === 7 ? 'active' : ''}`}>Vegetables</li>
                            <li onClick={() => closeDrop(8)} className={`${selected === 8 ? 'active' : ''}`}>Fresh Fruits</li>
                            <li onClick={() => closeDrop(9)} className={`${selected === 9 ? 'active' : ''}`}>Bread and Juice</li>
                            <li onClick={() => closeDrop(10)} className={`${selected === 10 ? 'active' : ''}`}>Fresh Seafood</li>
                        </ul>
                    </div>
                }
            </div>
        </>
    );
};

export default Dropdown;
