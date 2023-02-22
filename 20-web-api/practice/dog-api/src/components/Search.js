import React from "react";

export default function Search({handleChange, options}) {
    return (
        <div className="search">
            <select onChange={e => handleChange(e)}>
            {
                options.map((dogName,index) => {
                    return(
                        <option value={dogName} key={index}>
                            {dogName}
                        </option>
                    )
                })
            }
            </select>
            </div>
    )
}