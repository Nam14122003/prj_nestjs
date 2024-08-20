import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './auth.service';
import { User } from 'src/user/entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerUserDto: RegisterUserDto): Promise<User>;
}
