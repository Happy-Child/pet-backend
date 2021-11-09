import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  EngineersRepository,
  UsersEmailConfirmedRepository,
  UsersRepository,
} from './repositories';
import {
  UsersCheckBeforeCreateService,
  UsersCreateService,
  UsersUpdateService,
  UsersGeneralService,
  UsersSendingMailService,
  UsersGettingService,
  StationsWorkersCheckBeforeCreateService,
  UsersCheckBeforeUpdateService,
  StationsWorkersCheckBeforeUpdateService,
  DistrictsLeadersCheckBeforeUpdateService,
  EngineersCheckBeforeUpdateService,
} from './services';
import { MailSenderModule } from '@app/mail-sender';
import { PugModule } from '@app/pug';
import { DistrictsModule } from '../districts';
import { ClientsModule } from '../clients';
import { DistrictsLeadersModule } from '../districts-leaders';
import { StationsModule } from '../stations';
import { StationsWorkersRepository } from '../stations-workers/repositories';
import { StationsWorkersModule } from '../stations-workers';
import { DistrictsLeadersRepository } from '../districts-leaders/repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EngineersRepository,
      StationsWorkersRepository,
      DistrictsLeadersRepository,
      UsersRepository,
      UsersEmailConfirmedRepository,
    ]),
    ClientsModule,
    DistrictsModule,
    StationsModule,
    DistrictsLeadersModule,
    StationsWorkersModule,
    MailSenderModule,
    PugModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersGeneralService,
    StationsWorkersCheckBeforeCreateService,
    UsersCheckBeforeCreateService,
    UsersCreateService,
    UsersSendingMailService,
    UsersGettingService,
    UsersUpdateService,
    UsersCheckBeforeUpdateService,
    StationsWorkersCheckBeforeUpdateService,
    DistrictsLeadersCheckBeforeUpdateService,
    EngineersCheckBeforeUpdateService,
  ],
  exports: [UsersGettingService],
})
export class UsersModule {}
