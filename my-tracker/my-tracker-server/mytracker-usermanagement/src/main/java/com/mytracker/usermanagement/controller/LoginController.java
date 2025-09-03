package com.mytracker.usermanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.Map;

@RestController
@RequestMapping("/mytracker")
public class LoginController {
    @GetMapping("/user/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public String user(Authentication authentication){
        return  authentication.getName();
    }
}
