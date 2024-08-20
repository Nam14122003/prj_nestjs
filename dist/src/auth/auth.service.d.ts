import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    register(registerUserDto: RegisterUserDto): Promise<User>;
    private hashPassword;
}
