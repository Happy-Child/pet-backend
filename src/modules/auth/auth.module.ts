import config from 'config';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import {
  AuthEmailConfirmedRepository,
  AuthPasswordRecoveryRepository,
} from './repositories';
import {
  AuthSignInService,
  AuthPasswordRecoveryService,
  AuthSendingMailService,
  AuthEmailConfirmedService,
  AuthGeneralService,
} from './services';
import { AuthJwtStrategy } from './strategies';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailSenderModule } from '@app/mail-sender';
import { PugModule } from '@app/pug';
import { JwtModule } from '@nestjs/jwt';
import { readFile } from '@app/helpers';
import { EntityFinderModule } from '../entity-finder';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthEmailConfirmedRepository,
      AuthPasswordRecoveryRepository,
    ]),
    JwtModule.register({
      privateKey: readFile(config.RSA.PRIVATE_KEY_PATH).toString(),
      publicKey: readFile(config.RSA.PUBLIC_KEY_PATH).toString(),
      signOptions: {
        algorithm: config.JWT.ALGORITHM,
        expiresIn: config.JWT.EXPIRATION,
      },
    }),
    EntityFinderModule,
    MailSenderModule,
    PugModule,
  ],
  providers: [
    AuthSignInService,
    AuthEmailConfirmedService,
    AuthPasswordRecoveryService,
    AuthSendingMailService,
    AuthGeneralService,
    AuthJwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
