import { BaseController } from './baseController';
import { Get, JsonController } from 'routing-controllers';

@JsonController()
export class RootController extends BaseController {
  @Get('/hello-world')
  public helloWorld() {
    return {
      data: 'hello-world',
    };
  }
}
