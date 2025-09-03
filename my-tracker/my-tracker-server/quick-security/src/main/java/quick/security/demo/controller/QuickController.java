package quick.security.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quick")
public class QuickController {

    @GetMapping("/private/sayHello")
    public String privateMethod(){
        return "Private method ";
    }


    @GetMapping("/public/sayHello")
    public String publicMethod(){
        return "Private method ";
    }

    @PostMapping("/login")
    public boolean authenticate(){
        return true;
    }

    @PostMapping("/logout")
    public String logout(){
        return "Logged out ";
    }
}
