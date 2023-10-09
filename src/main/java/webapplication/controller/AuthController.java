package webapplication.controller;

import webapplication.dto.user.UserLoginRequestDto;
import webapplication.dto.user.UserLoginResponseDto;
import webapplication.dto.user.UserRegistrationRequest;
import webapplication.dto.user.UserResponseDto;
import webapplication.exception.RegistrationException;
import webapplication.security.AuthenticationService;
import webapplication.service.user.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.security.PermitAll;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Authentication management", description = "Endpoints for managing authentication")
@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/auth")
public class AuthController {
    private final UserService userService;
    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    @PermitAll
    @Operation(summary = "Login", description = "Login method to authenticate users")
    public UserLoginResponseDto login(@RequestBody UserLoginRequestDto requestDto) {
        return authenticationService.authenticate(requestDto);
    }

    @PostMapping("/register")
    @PermitAll
    @Operation(summary = "Register", description = "Register method to register users")
    public UserResponseDto register(@RequestBody @Valid UserRegistrationRequest request)
            throws RegistrationException {
        return userService.register(request);
    }
}
