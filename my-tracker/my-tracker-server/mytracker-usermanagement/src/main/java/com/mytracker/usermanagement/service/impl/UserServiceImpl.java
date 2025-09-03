package com.mytracker.usermanagement.service.impl;

import com.mytracker.usermanagement.dao.UserRepository;
import com.mytracker.usermanagement.data.User;
import com.mytracker.usermanagement.model.UserModel;
import com.mytracker.usermanagement.service.UserService;
import com.mytracker.usermanagement.service.UserServiceException;
import com.mytracker.usermanagement.service.mappers.UserMapper;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {
    final
    UserRepository userRepository;

    final
    UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public UserModel addUser(UserModel userModel) {
        if(userRepository.findUserByEmail(userModel.getEmail()).isPresent()){
            throw new UserServiceException("User exists with the email" + userModel.getEmail());
        }
        User user = userMapper.toUser(userModel);
        return userMapper.toModel(userRepository.save(user));
    }

    @Override
    public boolean checkUserExists(UserModel userModel){
        return userRepository.findUserByEmail(userModel.getEmail()).isPresent();
    }

    @Override
    public UserModel updateUser(long id, UserModel userModel) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserServiceException("User not found " + id));
        user.setFirstName(userModel.getFirstName());
        user.setLastName(userModel.getLastName());
        return userMapper.toModel(userRepository.save(user));
    }

    @Override
    public UserModel getUser(long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserServiceException("User not found " + id));
        return userMapper.toModel(user);
    }
}
