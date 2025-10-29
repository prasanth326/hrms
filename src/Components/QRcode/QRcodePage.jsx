import { QRCodeCanvas } from 'qrcode.react';
import styles from "./QRcodePage.module.css"
import { useState } from 'react';

export default function QRcodePage() {
  const [text, setText] = useState("https://pranithagandrath.com/")
  return (
    <div className={styles.QRCodeCanvasdiv}>
      <div className={styles.QRCodeCanvasdivQr}>Your Mobile QR Code</div>
      <div>QR code expires in 55 seconds.</div>
      <div className={styles.QRCodeCanvas}>
        <QRCodeCanvas value={text} size={200} bgColor="#ffffff" fgColor="#000" />
      </div>
    </div>
  );
}
