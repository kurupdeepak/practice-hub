package com.mytracker.usermanagement.service.mappers;

import com.mytracker.usermanagement.data.User;
import com.mytracker.usermanagement.model.UserModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserModel userModel);

    @Mapping(source="password",target="password",ignore = true)
    UserModel toModel(User user);
}
