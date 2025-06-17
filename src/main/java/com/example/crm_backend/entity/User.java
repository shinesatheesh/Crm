package com.example.crm_backend.entity;


import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import  jakarta.persistence.GeneratedValue;
import  jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter 
@NoArgsConstructor

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="name")
    private String name;
    @Column(name="email",nullable=false,unique=true)
    private String email;
    @Column(name="password")
    private String password;
    @Column(name="age")
    private int age;
    @CreationTimestamp
    @Column(name="created_at")
    private LocalDateTime created_at;
    @CreationTimestamp
    @Column(name="updated_at")
    private LocalDateTime updated_at;

}
