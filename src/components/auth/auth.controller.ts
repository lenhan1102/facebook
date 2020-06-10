import { Controller, Post, Body, UseGuards, Request, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('/auth')
@ApiTags('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Body() body: CreateUserDto, @Request() req): Promise<any> {
        console.log('controller')
        return this.authService.login(req.user);
    }

    // @Post('/signup')
    // async signup(@Body() body) {
    //     if (!this.U.findByUsername(body.username)){
    //         return this.userService.addUser(body.username, body.password)
    //     }
    //     return Error("Can not signup")
    // }
}
