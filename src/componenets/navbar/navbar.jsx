import React from 'react';
import {InstanceApi} from "../../sevices/axios/axios";

function Navbar(props) {
    InstanceApi.get("").then((res) => {
        console.log(res)
    })
    return (
        <div>
            <div></div>
        </div>
    );
}

export default Navbar;