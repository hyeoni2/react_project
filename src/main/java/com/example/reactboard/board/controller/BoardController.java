package com.example.reactboard.board.controller;

import com.example.reactboard.board.model.BoardEntity;
import com.example.reactboard.board.model.BoardSaveDto;
import com.example.reactboard.board.repository.BoardMapper;
import com.example.reactboard.board.service.BoardService;
import com.example.reactboard.util.Header;
import com.example.reactboard.util.Search;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
public class BoardController {
    @Autowired
    BoardMapper boardMapper;

    @Autowired
    BoardService boardService;


    //Http Get 방식으로 주소 가장 뒤 /board로 접근
    @GetMapping("/board")
    Header<List<BoardEntity>> getBoardList(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, Search search) {
        return boardService.getBoardList(page, size, search);
    }

    //idx의 데이터 1개를 조회한다.
    @GetMapping("/board/{idx}")
    Header<BoardEntity> getBoardOne(@PathVariable Long idx) {
        return boardService.getBoardOne(idx);
    }

    @PostMapping("/board")
    Header<BoardEntity> createBoard(@RequestBody BoardSaveDto boardSaveDto) {
        return boardService.insertBoard(boardSaveDto);
    }

    @PutMapping("/board")
    Header<BoardEntity> updateBoard(@RequestBody BoardSaveDto boardSaveDto) {
        return boardService.updateBoard(boardSaveDto);
    }

    @DeleteMapping("/board/{idx}")
    Header<String> deleteBoard(@PathVariable Long idx) {
        return boardService.deleteBoard(idx);
    }
}
