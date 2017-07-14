import { ComandaClientPage } from './app.po';

describe('comanda-client App', () => {
  let page: ComandaClientPage;

  beforeEach(() => {
    page = new ComandaClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
