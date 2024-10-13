'use client';

import { Button, Modal, Space } from 'antd';

export default function ModalAlertPage() {
  const success = () => {
    Modal.success({
      content: 'some messages...some messages...',
    });
  };

  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  };
  return (
    <Space wrap>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
    </Space>
  );
}
