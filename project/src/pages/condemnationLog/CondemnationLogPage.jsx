import {useNavigate} from "react-router-dom";
import React from "react";

const CondemnationLogPage = ({setActive}) => {
    const router = useNavigate()
    setActive(true)

    const items = JSON.parse(localStorage.getItem('condemnations'))

    return (
        <div style={{height: "auto"}}>
            <div style={{color: "white"}}>
                {items.length === 0
                    ?
                    <div>Нет</div>
                    :
                    items.map(item => {
                        return (
                            <div style={{background: "red"}}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CondemnationLogPage