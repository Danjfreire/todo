import { Module } from '@nestjs/common';
import { PrismaModule } from './@shared/prisma/prisma.module';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BoardModule, UserModule, PrismaModule],
  providers: [AppService],
})
export class AppModule {}
