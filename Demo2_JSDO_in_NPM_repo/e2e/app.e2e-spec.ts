import { Demo2JSDOInNPMRepoPage } from './app.po';

describe('demo2-jsdo-in-npm-repo App', function() {
  let page: Demo2JSDOInNPMRepoPage;

  beforeEach(() => {
    page = new Demo2JSDOInNPMRepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
