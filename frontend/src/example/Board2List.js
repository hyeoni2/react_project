import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Board2List = () => {

    const [board, setBoard] = useState([]);
    const navigate = useNavigate();

    const getBoardList = async () => {
        const resp = await(await axios.get("/board")).data;
        console.log(resp)
        setBoard(resp.data);
    }

    useEffect(() => {
        getBoardList();
    },[]);

    const write = () => {
        navigate('/board2/write');
    }

    return (
       <div>
           <Table striped bordered hover style={{
               width : "90%"
           }}>
               <thead>
               <tr style={{
                   "textAlign": "center"
               }}>
                   <th>순번</th>
                   <th>제목</th>
                   <th>작성자</th>
               </tr>
               </thead>
               <tbody>
               {board.map((item) => (
                   <tr>
                       <td>{item.idx}</td>
                       <td key={item.idx}>
                           <Link to={`/board2/${item.idx}`}>{item.title}
                           </Link>
                       </td>
                       <td>{item.createdBy}</td>
                   </tr>
               ))}
               </tbody>
           </Table>
           <br/>
           <div style={{
               "display": "flex",
               "justifyContent":"center",
               "alignItem":"center"
           }} >
               <Button variant="primary" onClick={write}>글쓰기</Button>
           </div>
       </div>

    );
};

export default Board2List;