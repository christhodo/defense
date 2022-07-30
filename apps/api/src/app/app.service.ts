import { Injectable } from '@nestjs/common';
import { Message } from '@defense-angular/api-interfaces';
import { DefensesModule } from '../defenses/defenses.module';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
