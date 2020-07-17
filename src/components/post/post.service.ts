import { Injectable, BadRequestException } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "src/entity";

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {

  }
  async create(userId: number, body: CreatePostDto) {
    try {
      await this.postRepository.insert({ content: body.content, userId });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
