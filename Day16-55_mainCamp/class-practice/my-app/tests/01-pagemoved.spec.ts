import { test, expect } from '@playwright/test';

// 이 검증은 yarn dev로 한번 실행하고 나서 이걸 해야 에러가 안생김

test('페이지 이동하기 시나리오', async ({ page }) => {
  await page.goto('http://localhost:3000/section34/34-06-playwright-e2e-test'); //처음에 접속할 페이지
  await page.click('text=페이지 이동하기'); //이 버튼을 클릭해서 페이지 이동

  //이동한 페이지의 Url이 뭔데? , 즉 여기다가는 이동한 후의 페이지 url을 작성
  await expect(page).toHaveURL(
    'http://localhost:3000/section34/34-06-playwright-e2e-test-moved'
  );

  //페이지 이동 후에 보여지는 그림
  await expect(page.locator('h2')).toContainText('페이지가 이동했습니다.');
});
