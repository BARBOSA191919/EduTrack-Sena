import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { FichasModule } from './fichas/fichas.module';
import { SeguimientoModule } from './seguimiento/seguimiento.module';

@Module({
  imports: [UsuariosModule, AuthModule, FichasModule, SeguimientoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
