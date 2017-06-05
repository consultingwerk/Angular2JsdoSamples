import { Demo3SmartDataSourceBindingPage } from './app.po';

describe('demo3-smart-data-source-binding App', () => {
  let page: Demo3SmartDataSourceBindingPage;

  beforeEach(() => {
    page = new Demo3SmartDataSourceBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
