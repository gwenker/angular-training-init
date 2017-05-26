import { AngularTrainingPage } from './app.po';

describe('angular-training App', () => {
  let page: AngularTrainingPage;

  beforeEach(() => {
    page = new AngularTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
