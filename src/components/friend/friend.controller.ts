import { Controller, Post, Body, UseGuards, Request, Get, Req } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { AddFriendDto } from "./dtos/add-friend.dto";
import { FriendService } from "./friend.service";
import { AuthGuard } from "@nestjs/passport";

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('/friend')
@ApiTags('friend')
export class FriendController {
    constructor(private friendService: FriendService) { }

    @Post('/add-friend')
    async addFriend(@Req() request ,@Body() body: AddFriendDto): Promise<any> {
        this.friendService.addFriend(request.user.id, body.id)
    }
    @Get('/get-friend-list')
    async getFriendList(@Req() request, @Body() body: AddFriendDto): Promise<any> {
        // this.friendService.getFriendList(request.user.id, body.id)
    }
}
