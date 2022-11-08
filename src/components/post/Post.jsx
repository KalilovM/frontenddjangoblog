import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dateFormat from 'dateformat'
import style from './Post.module.scss'
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Post(props) {
    console.log(props)
    return (
        <div className="container col-8 mt-4 px-lg-5 px-md-4 border border-1 py-4 border-primary mx-auto">
            <Row className="d-flex flex-column">
                <Col className="d-flex flex-row align-items-center">
                    <img src={props.author.avatar} alt="avatar" width={25}/>
                    <p className="my-auto" style={{marginLeft: "10px"}}>
                        <b>{props.author.first_name}</b> {dateFormat(props.created_at, "mmmm dS, yyyy")}
                    </p>
                </Col>

                <Col>
                    <h2><b>{props.title}</b></h2>
                </Col>
                <Col>
                    <p><span className={style.tag}>Перевод</span><span className={style.tag}>Перевод</span></p>
                </Col>
                <Col className="mb-5">
                    <img style={{width: "100%"}} alt="post image" src={props.cover}/>
                </Col>
                <Col>
                    <p>{props.content}</p>
                </Col>
                <Col>
                    {/*IF route is already an id, change to go back button*/}
                    <Link to={`/${props.id}`}><Button variant={"primary"}>Читать далее</Button></Link>
                </Col>

            </Row>
    </div>);
}

export default Post;