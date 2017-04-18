import { DishWebAppPage } from './app.po';

describe('dish-web-app App', () => {
  let page: DishWebAppPage;

  beforeEach(() => {
    page = new DishWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
