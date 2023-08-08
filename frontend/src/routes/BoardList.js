/* BoardList.js */
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

const BoardList = () => {
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        const resp = (await axios.get('/board')).data; // 2) 게시글 목록 데이터에 할당
        console.log(resp);
        setBoardList(resp.data); // 3) boardList 변수에 할당

        const pngn = resp.pagination;
        console.log(pngn);
    }

    const moveToWrite = () => {
        navigate('/write');
    };

    useEffect(() => {
        getBoardList(); // 1) 게시글 목록 조회 함수 호출
    }, []);


    return (
        <div>
            <table id="boardTable">
                <thead>
                    <tr>
                        <th>순번</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((board) => (
                        // 4) map 함수로 데이터 출력
                        <tr>
                            <td>
                                {board.idx}
                            </td>
                            <td key={board.idx}>
                                <Link to={`/board/${board.idx}`}>{board.title}</Link>
                            </td>
                            <td>
                                {board.createdBy}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <div>
                <button onClick={moveToWrite}>글쓰기</button>
            </div>
        </div>
    );
};

export default BoardList;