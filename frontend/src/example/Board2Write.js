import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Alert, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const BoardWrite = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const [board, setBoard] = useState({
        title: '',
        createdBy: '',
        contents: '',
    });

    const {title, createdBy, contents} = board;

    const onChange = (event) => {
        const {value, name} = event.target;
        setBoard({
            ...board,
            [name]: value,
        })
    }

    const saveBoard = async () => {
        await axios.post(`/board`, board).then((res) => {
            setShow(true);
        });
    };

    const backToList = () => {
        navigate('/board2');
    };

    return (
        <>
            <Alert show={show} variant="primary">
                <Alert.Heading>게시글 저장</Alert.Heading>
                <p>
                   게시글이 저장되었습니다.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => backToList()} variant="outline-success">
                        확인
                    </Button>
                </div>
            </Alert>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="title">제목</Form.Label>
                    <Form.Control type="text" placeholder="제목을 입력해주세요." value={title} name="title"  onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="createdBy">작성자</Form.Label>
                    <Form.Control type="text" placeholder="작성자를 입력해주세요." value={createdBy} name="createdBy"  onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="contents">내용</Form.Label>
                    <Form.Control as="textarea" aria-label="contents" value={contents} name="contents" onChange={onChange} placeholder="내용일 입력해주세요."/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={saveBoard}>
                    저장
                </Button>
                <span>  </span>
                <Button variant="dark" type="button" onClick={backToList}>
                    취소
                </Button>
            </Form>
        </>
    );
};

export default BoardWrite;