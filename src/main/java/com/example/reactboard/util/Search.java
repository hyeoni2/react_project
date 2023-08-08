package com.example.reactboard.util;


import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Search {
    private String sk;  //search key
    private String sv;  //search value
}