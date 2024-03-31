import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/common/database/prisma/prisma.service';
import { PrismaModule } from 'src/common/database/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [UserRepository],
  controllers: [UserController]
})
export class UserModule {}
