/* Board.js */
import React from 'react';
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

const Board = ({ idx, title, contents, createdBy }) => {
    return (
        <div>
            <Form>
                <Row as={Row} className="mb-3">
                    <Form.Label htmlFor="title" column sm={3}>
                        제목
                    </Form.Label>
                    <Col sm={15}>
                        <Form.Control type="text" value={title} readOnly/>
                    </Col>
                </Row>
                <Row as={Row} className="mb-3">
                    <Form.Label htmlFor="createdBy" column sm={3}>
                        작성자
                    </Form.Label>
                    <Col sm={15}>
                        <Form.Control type="text" value={createdBy} readOnly/>
                    </Col>
                </Row>
                <Row as={Row} className="mb-3">
                    <FloatingLabel htmlFor="contents">
                        내용
                    </FloatingLabel>
                    <Form.Control
                        as="textarea"
                        value={contents}
                        style={{ height: '100px' }}
                    />
                </Row>
            </Form>
        </div>
    );
};

export default Board;