import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleOAuthGuard } from './google-oauth.guard';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) {
    console.log(req);
  }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.appService.googleLogin(req);
  }
}
