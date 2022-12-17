import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [BoardModule, UserModule],
  providers: [AppService, PrismaService],
})
export class AppModule {}
