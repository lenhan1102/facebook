import { Injectable, BadRequestException } from "@nestjs/common";
import { AddFriendDto } from "./dtos/add-friend.dto";

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Friend } from "src/entity";

@Injectable()
export class FriendService {

  constructor(
    @InjectRepository(Friend)
    private friendRepository: Repository<Friend>
  ) {

  }
  getRelation(userIdOne: number, userIdTwo: number){
    const relation = userIdOne < userIdTwo ? { userIdOne, userIdTwo } : { userIdTwo, userIdOne }
    return relation
  }
  async addFriend(userIdOne: number, userIdTwo: number) {
    try {
      const relation = this.getRelation(userIdOne, userIdTwo)
      await this.friendRepository.insert(relation);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async getFriendList(userId: number) {
    try {
      const list = await this.friendRepository.find({ userIdOne: userId });
      return list;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async unFriend(userId: number, friendId: number) {
    try {
      const relation = this.getRelation(userId, friendId)
      await this.friendRepository.delete({ userIdOne: relation.userIdOne, userIdTwo: relation.userIdTwo  });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
