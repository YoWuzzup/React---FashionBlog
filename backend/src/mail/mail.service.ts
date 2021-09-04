import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService){}

    async userSendEmail(data: Record<string, any>) {

        await this.mailerService.sendMail({
            from: data.email,
            to: process.env.MAIL_USER,
            subject: `New message from ${data.name}`,
            template: './templates/confirmation', 
            context: { 
                name: data.name,
                surname: data.surname,
                email: data.email,
                subject: data.subject,
                message: data.message,
            },
        })
    }
}
