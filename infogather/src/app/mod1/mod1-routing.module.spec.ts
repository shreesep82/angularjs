import { Mod1RoutingModule } from './mod1-routing.module';

describe('Mod1RoutingModule', () => {
  let mod1RoutingModule: Mod1RoutingModule;

  beforeEach(() => {
    mod1RoutingModule = new Mod1RoutingModule();
  });

  it('should create an instance', () => {
    expect(mod1RoutingModule).toBeTruthy();
  });
});
