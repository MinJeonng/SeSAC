'use client';
import * as PortOne from '@portone/browser-sdk/v2';
import { v4 as uuidv4 } from 'uuid';

export default function PaymentPage() {
  const onClickPay = async () => {
    const result = await PortOne.requestPayment({
      // storeId, channelId는 백엔드랑 연동된 거로 해야함.
      // 여기에서는 일단 브라우저에서만 연동함
      storeId: 'store-482cd00c-a9c1-4401-9400-e4e348bd92dd',
      paymentId: uuidv4(),
      channelKey: 'channel-key-07004a42-da3f-4c90-86ac-ef58860c22cd',
      orderName: '마우스',
      totalAmount: 10000,
      currency: 'CURRENCY_KRW',
      payMethod: 'EASY_PAY',
      customer: {
        fullName: '쿠크다스',
        phoneNumber: '010-2224-3333',
        email: 'example@example.com',
        address: {
          country: 'COUNTRY_KR',
          addressLine1: '서울시',
          addressLine2: '서초구',
        },
        zipcode: '06599',
      },
      redirectUrl: 'http://localhost:3000/section27/27-01-payment-success',
    });
    console.log(result, '결제 성공');
    //백엔드에다 결제관련 데이터 넘겨주기 mutation 실행하기 - createPointTr..... 주의 : storeId, channelKey 변경필요
  };
  return <button onClick={onClickPay}>결제하기</button>;
}
