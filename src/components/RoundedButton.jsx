import React from 'react';
import Button from '@mui/material/Button';

function RoundedButton({buttonText,onClick}) {
  return (
    <Button
      variant="contained"
      style={{
        borderRadius: '50%', // 丸い形状にする
        width: '100px', // ボタンの幅
        height: '100px', // ボタンの高さ
        margin: 15
      }}
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
}

export default RoundedButton;
