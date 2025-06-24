package com.example.crm_backend.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private int age;
    private LocalDateTime created_at;
    private LocalDateTime updated_at;
}
