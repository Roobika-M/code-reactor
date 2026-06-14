package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    @GetMapping("/hello")
    public String hello(){
        return "hello fellow mate";
    }
}
