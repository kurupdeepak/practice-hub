package com.mytracker.usermanagement.service;

import com.mytracker.usermanagement.model.UserModel;

public interface UserService {

    UserModel addUser(UserModel userModel);

    boolean checkUserExists(UserModel userModel);

    UserModel updateUser(long id,UserModel userModel);

    UserModel getUser(long id);

}
