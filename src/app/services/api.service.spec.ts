import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule} from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(ApiService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#call api to collect flight specification', () => {
    expect(service.searchFlight).toBeTruthy();
  });
});
