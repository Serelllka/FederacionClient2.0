import {useNavigate} from "react-router-dom";
import React from "react";

const CondemnationLogPage = ({setActive}) => {
    const router = useNavigate()
    setActive(true)

    const items = JSON.parse(localStorage.getItem('condemnations'))
    console.log("items: ", items)

    return (
        <div style={{height: "100%"}}>
            <div style={{color: "white"}}>
                {items.length === 0
                    ?
                    <div>Нет</div>
                    :
                    items.map(item => {
                        return <p>{item}</p>
                    })
                }
            </div>
        </div>
    )
}

export default CondemnationLogPage