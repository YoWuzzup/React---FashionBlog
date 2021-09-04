import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { MailService } from './mail.service';
import { join } from 'path';
import { MailController } from './mail.controller'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
      transport: {
        secure: false,
        service: 'Gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      },
      defaults: {
        from: '"No Reply" <noreply@example.com',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    })
  }),
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService]
})

export class MailModule {}
