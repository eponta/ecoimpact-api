import { MongooseModule } from '@nestjs/mongoose';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsModule } from './maps/maps.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://etiAdmin:GPCMgo1tIa1FFbBB@devcluster.fjwwggv.mongodb.net/ecoimpact-test?retryWrites=true&w=majority&appName=DevCluster'), MapsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
