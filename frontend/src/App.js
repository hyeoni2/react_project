/* App.js */
import {Route, Routes} from "react-router-dom";
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";
import BoardDetail from "./routes/BoardDetail";
import BoardWrite from "./routes/BoardWrite";
import React from "react";
import BoardUpdate from "./routes/BoardUpdate";
import Map from "./routes/Map";
import Board2List from "./example/Board2List";
import Board2Detail from "./example/Board2Detail";
import Board2Update from "./example/Board2Update";
import Board2Write from "./example/Board2Write";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/board" element={<BoardList/>}/>
            <Route path="/board/:idx" element={<BoardDetail/>}/>
            <Route path="/write" element={<BoardWrite />} />
            <Route path="/update/:idx" element={<BoardUpdate />} />
            <Route path="/map" element={<Map />} />
            <Route path="/board2" element={<Board2List />} />
            <Route path="/board2/:idx" element={<Board2Detail />} />
            <Route path="/board2/update/:idx" element={<Board2Update />} />
            <Route path="/board2/write" element={<Board2Write />} />
        </Routes>
    );
}

export default App;