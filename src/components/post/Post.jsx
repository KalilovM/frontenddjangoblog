import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dateFormat from 'dateformat'

function Post(props) {
    return (<div className="container col-8 mt-4 px-lg-5 px-md-4 border border-1 py-4 border-primary mx-auto">
        <Row className="d-flex flex-column">
            <Col className="d-flex flex-row align-items-center">
                <img src={props.author.avatar} alt="avatar" width={25}/>
                <p className="my-auto" style={{marginLeft: "10px"}}><b>{props.author.first_name}</b> {dateFormat(props.created_at,"mmmm dS, yyyy")}
                </p>
            </Col>

            <Col><h2>{props.title}</h2></Col>
            <Col>Блог компании Southbridge DevOps
                *
                IT-инфраструктура
                *</Col><Col>Перевод</Col><Col><img style={{width: "100%"}} alt="post image" src={props.cover}/></Col>
        </Row>
    </div>);
}

export default Post;