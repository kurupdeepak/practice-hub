package quick.security.demo.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashMap;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class QuickControllerTest {
    //all three tests work /quick/private/** and public
    ///**/private/** and public works as well
    ///private
    //formLogin
    @Autowired
    TestRestTemplate restTemplate;

    @Test
    void privateMethod_401() {

            ResponseEntity<String> r = restTemplate.getForEntity("/quick/private/sayHello",String.class);
            System.out.println("private401 = " + r);
            assertThat(r.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
    }

    @Test
    void privateMethod_OK() {
        ResponseEntity<String> r = restTemplate
                .withBasicAuth("quick1","password")
                .getForEntity("/quick/private/sayHello",String.class);
        System.out.println(r);
        assertThat(r.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void publicMethod() {
        ResponseEntity<String> r = restTemplate.getForEntity("/quick/public/sayHello",String.class);
        System.out.println("private401 = " + r);
        assertThat(r.getStatusCode()).isEqualTo(HttpStatus.OK);
    }


    @Test
    void testAuthenticate() {
        Map<String,String> request = new HashMap<>();
        request.put("username","quick1");
        request.put("password","password");
        ResponseEntity<String> r = restTemplate.postForEntity("/logout",request,String.class);
        assertThat(r.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    void authenticate() {
    }

    void logout() {
    }
}