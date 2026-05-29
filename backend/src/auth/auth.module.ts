import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; 
import { PassportModule } from '@nestjs/passport'; 

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    JwtModule.register({ 
      secret: 'admin123', 
      signOptions: { expiresIn: '60m' }, 
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    JwtStrategy 
  ],
})
export class AuthModule {}
