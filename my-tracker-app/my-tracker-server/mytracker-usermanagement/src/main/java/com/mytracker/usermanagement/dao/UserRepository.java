package com.mytracker.usermanagement.dao;

import com.mytracker.usermanagement.data.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User,Long> {

    Optional<User> findUserByEmail(String email);
}
