package com.mytracker.usermanagement.controller;

import com.mytracker.usermanagement.model.UserModel;
import com.mytracker.usermanagement.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mytracker/v1")
public class UserController {
    final
    UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public UserModel createUser(@RequestBody UserModel userModel){
        return userService.addUser(userModel);
    }

    @PutMapping("/users/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public UserModel updateUser(@PathVariable("id") long id,@RequestBody UserModel userModel){
        return userService.updateUser(id,userModel);
    }

    @GetMapping("/users/{id}")
    public UserModel getUser(@PathVariable("id") long id){
        return userService.getUser(id);
    }


}
