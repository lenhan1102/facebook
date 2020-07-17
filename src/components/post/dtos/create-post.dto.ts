import { ApiProperty } from "@nestjs/swagger"

export class CreatePostDto {
    @ApiProperty({ example: 'content' })
    content: string;
}