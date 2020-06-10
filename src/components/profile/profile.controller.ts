import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ProfileService } from "./profile.service";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";

@ApiBearerAuth()
@Controller('/profile')
@ApiTags('profile')
export class ProfileController {
    constructor(private readonly profileService : ProfileService){

    }
    @UseGuards(AuthGuard('jwt'))
    @Get('')
    getProfile(@Request() req) {
        return this.profileService.getProfile(req.user);
    }
}