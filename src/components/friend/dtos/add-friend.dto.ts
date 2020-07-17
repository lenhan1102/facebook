import { ApiProperty } from "@nestjs/swagger"

export class AddFriendDto {
    @ApiProperty({ example: '1' })
    id: number;
}