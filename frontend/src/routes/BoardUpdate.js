import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const BoardUpdate = () => {
    const navigate = useNavigate();
    const {idx} = useParams();
    const [board, setBoard] = useState({
       idx :0,
       title : '',
       createdBy : '',
       contents : '',
    });

    const {title, createdBy, contents} = board;

    const getBoard = async () => {
       const resp = (await axios.get(`/board/${idx}`)).data;
       console.log(resp.data)
        setBoard(resp.data);
    }

    const updateBoard = async () => {
        await axios.put(`/board`, board).then((res) => {
            alert("수정되었습니다.");
            navigate(`/board/` + idx);
        })
    }

    useEffect(() => {
        getBoard();
    }, []);

    const onChange = (event) => {
        const {value, name} = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const backToDetail = () => {
        navigate(`/board/`+idx);
    };

    return(
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange}/>
            </div>
            <br/>
            <div>
                <span>작성자</span>
                <input type="text" name="createdBy" value={createdBy} onChange={onChange} readOnly={true}/>
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea name="contents" cols="30" rows="10" value={contents} onChange={onChange}/>
            </div>
            <br/>
            <div>
                <button onClick={updateBoard}>수정</button>
                <button onClick={backToDetail}>취소</button>
            </div>
        </div>
    );
}

export default BoardUpdate;