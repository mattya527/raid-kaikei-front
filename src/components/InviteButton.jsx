import React from 'react';
import Button from '@mui/material/Button';

function InviteButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      style={{
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)', // 影の追加
        transition: 'box-shadow 0.3s ease-in-out', // ホバーエフェクトの追加
        '&:hover': {
          boxShadow: '0px 5px 7px 0px rgba(0,0,0,0.2)', // ホバー時の影の変更
        },
      }}
      onClick={onClick} // クリックイベントを追加
    >
      招待リンクを発行する
    </Button>
  );
}

export default InviteButton;