import { Controller, Post, Body, UseGuards, Request, Get, Req } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { CreatePostDto } from "./dtos/create-post.dto";
import { PostService } from "./post.service";
import { AuthGuard } from "@nestjs/passport";

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('/post')
@ApiTags('post')
export class PostController {
    constructor(private postService: PostService) { }

    @Post('/')
    async create(@Req() request ,@Body() body: CreatePostDto): Promise<any> {
        this.postService.create(request.user.id, body)
    }

    // @Post('/signup')
    // async signup(@Body() body) {
    //     if (!this.U.findByUsername(body.username)){
    //         return this.userService.addUser(body.username, body.password)
    //     }
    //     return Error("Can not signup")
    // }
}
