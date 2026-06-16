package com.example.demo.controller;


import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Algorithm;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AlgorithmController {


    @GetMapping("/algorithms")
    public List<Algorithm> getAlgorithms(){


        return List.of(

            new Algorithm(
                "Bubble Sort",
                "Sorting",
                "O(n²)",
                "O(1)"
            ),

            new Algorithm(
                "Merge Sort",
                "Sorting",
                "O(n log n)",
                "O(n)"
            ),

            new Algorithm(
                "Binary Search",
                "Searching",
                "O(log n)",
                "O(1)"
            )

        );
    }
}