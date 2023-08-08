/* BoardDetail.js */
import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Board from "../components/Board";

const BoardDetail = () => {
    const {idx} = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});

    const getBoard = async () => {
        const resp = await (await axios.get(`/board/${idx}`)).data;
        console.log(resp)
        setBoard(resp.data);
        setLoading(false);
    };

    useEffect(() => {
        getBoard();
    }, []);

    const modifyPage = () => {
        navigate(`/update/${board.idx}`);
    };

    const backToList = () => {
        navigate('/board');
    };

    const deleteBoard = async () => {
        await axios.delete(`/board/${idx}`).then((res) => {
            alert("삭제되었습니다.");
            navigate(`/board`);
        })
    }

    return (
        <div>
            {loading ? (
                <h2>loading...</h2>
            ) : (
                <Board
                    idx={board.idx}
                    title={board.title}
                    contents={board.contents}
                    createdBy={board.createdBy}
                />
            )}
        <div>
            <button onClick={modifyPage}>수정</button>
            <button onClick={deleteBoard}>삭제</button>
            <button onClick={backToList}>취소</button>
        </div>
        </div>
    );
};

export default BoardDetail;

