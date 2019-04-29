import { Mod2RoutingModule } from './mod2-routing.module';

describe('Mod2RoutingModule', () => {
  let mod2RoutingModule: Mod2RoutingModule;

  beforeEach(() => {
    mod2RoutingModule = new Mod2RoutingModule();
  });

  it('should create an instance', () => {
    expect(mod2RoutingModule).toBeTruthy();
  });
});
