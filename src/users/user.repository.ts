import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.repo.find();
  }

async findById(id: number): Promise<User | null> {
  return this.repo.findOne({
    where: { id }, // aquí puedes poner condiciones más complejas
  });
}
  async findByEmail(email: string): Promise<User | null> {
    return this.repo.findOne({ where: { email } });
  }

  async updateUser(user: User, updateUserDto: UpdateUserDto): Promise<User> {
    const updated = Object.assign(user, updateUserDto);
    return this.repo.save(updated);
  }

  async removeUser(user: User): Promise<void> {
    await this.repo.remove(user);
  }
}
