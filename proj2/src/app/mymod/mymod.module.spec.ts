import { MymodModule } from './mymod.module';

describe('MymodModule', () => {
  let mymodModule: MymodModule;

  beforeEach(() => {
    mymodModule = new MymodModule();
  });

  it('should create an instance', () => {
    expect(mymodModule).toBeTruthy();
  });
});
