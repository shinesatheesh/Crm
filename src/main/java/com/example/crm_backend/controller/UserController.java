package com.example.crm_backend.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crm_backend.entity.User;
import com.example.crm_backend.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    // ✅ Constructor injection
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }

    @PostMapping("/createUser")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user); // ✅ Now using the instance
    }
}

