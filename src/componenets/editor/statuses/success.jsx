import React from 'react';
import success from "../../../static/img/success.png"
import {Link} from "react-router-dom";

function Success(props) {
    return (
        <div>
            <img
                src={success}
                alt="Success"
                width={250}
                height={250}
            />
            <h1>Успешно</h1>
            <p>Ваш пост отправился на модерацию</p>
            <Link to={"/"}>Перейти на главную</Link>
        </div>
    );
}

export default Success;