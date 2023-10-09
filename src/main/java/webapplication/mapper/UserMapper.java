package webapplication.mapper;

import webapplication.config.MapperConfig;
import webapplication.dto.user.UserRegistrationRequest;
import webapplication.dto.user.UserResponseDto;
import webapplication.dto.user.UserResponseRoleDto;
import webapplication.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = MapperConfig.class)
public interface UserMapper {
    UserResponseDto toDto(User user);

    @Mapping(target = "id", ignore = true)
    User toModel(UserRegistrationRequest request);

    UserResponseDto toUserResponse(User user);

    UserResponseRoleDto toUserRoleResponse(User user);
}
