import { Body, Controller, Param, Post } from '@nestjs/common';
import { MailService } from './mail.service'

@Controller('api')
export class MailController{
    constructor(private mailService: MailService ) {}

    @Post('sendemail')
    async getEmail(@Body() data: object ){
        
        return this.mailService.userSendEmail(data)
    }
}