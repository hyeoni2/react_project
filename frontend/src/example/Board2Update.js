import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Board from "../components/Board";
import {Alert, Col, FloatingLabel, Form, Row, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Board2Update = () => {

    const navigate = useNavigate();
    const {idx} = useParams();
    const [show, setShow] = useState(false);

    const [board, setBoard] = useState({
        idx: 0,
        title: '',
        createdBy: '',
        contents: '',
    });

    const {title, createdBy, contents} = board;

    const getBoardDetail = async () => {
        const resp = await (await axios.get(`/board/${idx}`)).data;
        console.log(resp);
        setBoard(resp.data);
    }

    useEffect(() => {
        getBoardDetail();
    }, []);
    

    const change = (event) => {
        const {value, name} = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    }

    const onChange = async () => {
        await (await axios.put(`/board`, board).then((res) => {
            setShow(true)
        }))
    }

    const boardDetail = () => {
        navigate('/board2/'+idx)
    }

    return (
        <>
            <Alert show={show} variant="primary">
                <Alert.Heading>게시글 수정</Alert.Heading>
                <p>
                    게시글이 수정되었습니다.
                </p>
                <hr/>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => boardDetail()} variant="outline-success">
                        확인
                    </Button>
                </div>
            </Alert>
            <div style={{
                "display": "flex",
                "justifyContent": "center",
                "alignItem": "center",
                marginTop: "30px"
            }}>

                <Form>
                    <Row as={Row} className="mb-3">
                        <Form.Label htmlFor="title" column sm={3}>
                            제목
                        </Form.Label>
                        <Col sm={15}>
                            <Form.Control type="text" name="title" value={title} onChange={change}/>
                        </Col>
                    </Row>
                    <Row as={Row} className="mb-3">
                        <Form.Label htmlFor="createdBy" column sm={3}>
                            작성자
                        </Form.Label>
                        <Col sm={15}>
                            <Form.Control type="text" name="createdBy" value={createdBy} onChange={change} readOnly/>
                        </Col>
                    </Row>
                    <Row as={Row} className="mb-3">
                        <FloatingLabel htmlFor="contents">
                            내용
                        </FloatingLabel>
                        <Form.Control
                            as="textarea"
                            value={contents}
                            style={{height: '100px'}} name="contents" onChange={change}
                        />
                    </Row>
                </Form>

                <br/>
            </div>

            <div style={{
                "display": "flex",
                "justifyContent": "center",
                "alignItem": "center"
            }}>
                <Button variant="primary" onClick={onChange}>수정</Button>
                &nbsp;
                <Button variant="primary" onClick={boardDetail}>취소</Button>
            </div>
        </>
    );
};

export default Board2Update;