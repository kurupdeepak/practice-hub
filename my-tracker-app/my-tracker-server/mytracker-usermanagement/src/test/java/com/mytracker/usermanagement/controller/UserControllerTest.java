package com.mytracker.usermanagement.controller;

import com.mytracker.usermanagement.model.UserModel;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserControllerTest {
    @Autowired
    TestRestTemplate testRestTemplate;

    @Test
    void test_SecuredURL_Unauthorized(){
        ResponseEntity<String> responseEntity = testRestTemplate.getForEntity("/mytracker/user/login",String.class);
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
    }

    @Test
    void test_SecuredURL_OK(){
        ResponseEntity<String> responseEntity = testRestTemplate
                .withBasicAuth("mytracker1", "password")
                .getForEntity("/mytracker/user/login",String.class);
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
    //csrf disable passed the test
    @Test
    void test_GetUser_WithoutAuth(){
        ResponseEntity<String> response = testRestTemplate.getForEntity("/mytracker/v1/users/1",String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
    }

    @Test
    void test_AddUser_OK(){
        UserModel userModel = new UserModel();
        userModel.setFirstName("John");
        userModel.setLastName("Thomas");
        userModel.setEmail("j.t@testdomain.com");
        userModel.setPassword("password123");
        ResponseEntity<UserModel> response = testRestTemplate
                .postForEntity("/mytracker/v1/users",userModel,UserModel.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

//    @Test
    void test_UpdateUser(){
        ResponseEntity<UserModel> response1 = testRestTemplate.getForEntity("/mytracker/v1/users/11",UserModel.class);
        UserModel um = response1.getBody();
        um.setLastName("Marcos");
        testRestTemplate.put("/mytracker/v1/users/11",um);
        ResponseEntity<UserModel> response2 = testRestTemplate.getForEntity("/mytracker/v1/users/11",UserModel.class);
        assertThat(response2.getBody().getLastName()).isEqualTo("Marcos");
    }

//    @Test
    void test_GetUser(){
        ResponseEntity<UserModel> response1 = testRestTemplate.getForEntity("/mytracker/v1/users/15",UserModel.class);
        assertThat(response1.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response1.getBody().getFirstName() + " " + response1.getBody().getLastName()).isEqualTo("John Test15");
    }
}