import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Board from "../components/Board";
import {Alert, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Board2Detail = () => {

    const {idx} = useParams();
    const [board, getBoard] = useState({});
    const navigate = useNavigate();
    const [loging, getLoding] = useState(true);
    const [show, setShow] = useState(false);

    const getBoardDetail = async () => {
        const resp = await (await axios.get(`/board/${idx}`)).data;
        console.log(resp);
        getBoard(resp.data);
        setTimeout(() => {
            getLoding(false)
        }, 3000);
    }

    useEffect(() => {
        getBoardDetail();
    }, []);

    const deleteIdx = async () => {
        await (await axios.delete(`/board/${board.idx}`).then((res) => {
            setShow(true)
        }));
    }

    const boardList = () => {
        navigate('/board2');
    }

    const modifyIdx = () => {
        navigate(`/board2/update/${board.idx}`);
    }

    return (
        <>
            <Alert show={show} variant="primary">
                <Alert.Heading>게시글 삭제</Alert.Heading>
                <p>
                    게시글이 삭제되었습니다.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => boardList()} variant="outline-success">
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
                {loging ?
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button> : (
                        <Board
                            idx={board.idx}
                            title={board.title}
                            contents={board.contents}
                            createdBy={board.createdBy}
                        />
                    )}

                <br/>
            </div>
            {loging ?
                ''
                :
                <div style={{
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItem": "center"
                }}>
                    <Button variant="primary" onClick={modifyIdx}>수정</Button>
                    &nbsp;
                    <Button variant="primary" onClick={deleteIdx}>삭제</Button>
                    &nbsp;
                    <Button variant="primary" onClick={boardList}>취소</Button>
                </div>}
        </>
    );
};
export default Board2Detail;