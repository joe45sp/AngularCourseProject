import { CourseProjectAppPage } from './app.po';

describe('course-project-app App', () => {
  let page: CourseProjectAppPage;

  beforeEach(() => {
    page = new CourseProjectAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
