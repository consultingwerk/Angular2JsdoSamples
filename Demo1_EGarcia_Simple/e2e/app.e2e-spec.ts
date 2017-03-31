import { Demo1EGarciaSimplePage } from './app.po';

describe('demo1-egarcia-simple App', function() {
  let page: Demo1EGarciaSimplePage;

  beforeEach(() => {
    page = new Demo1EGarciaSimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
