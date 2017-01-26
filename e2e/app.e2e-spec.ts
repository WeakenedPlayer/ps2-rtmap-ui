import { Ps2RtmapUiPage } from './app.po';

describe('ps2-rtmap-ui App', function() {
  let page: Ps2RtmapUiPage;

  beforeEach(() => {
    page = new Ps2RtmapUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
