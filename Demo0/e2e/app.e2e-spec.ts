import { Demo0Page } from './app.po';

describe('demo0 App', () => {
  let page: Demo0Page;

  beforeEach(() => {
    page = new Demo0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
