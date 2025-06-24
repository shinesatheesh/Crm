package com.example.crm_backend.repositary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crm_backend.entity.User;

@Repository
public interface UserRepositary extends JpaRepository<User, Long> {
    // You can also define custom queries like:
    // Optional<User> findByEmail(String email);
}