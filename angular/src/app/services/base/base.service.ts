import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable()
export class BaseService {
  protected baseUrl = environment.apiUrl;
  constructor() { }

  protected isJson(str): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

}
