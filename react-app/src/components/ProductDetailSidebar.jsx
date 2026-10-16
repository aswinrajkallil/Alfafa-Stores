import React, { useState } from 'react';

export default function ProductDetailSidebar() {
  const [deliveryOpen, setDeliveryOpen] = useState(true);
  const [paymentsOpen, setPaymentsOpen] = useState(false);
  const [qualityOpen, setQualityOpen] = useState(false);

  return (
    <div className="rk">
      <span
        className="levo52"
        title="Delivery"
        style={{ backgroundImage: "url('/assets/im/delivery.png')" }}
        onClick={() => setDeliveryOpen((prev) => !prev)}
      >
        Delivery <i className={`fas fa-angle-${deliveryOpen ? 'up' : 'down'}`}></i>
      </span>
      <div id="levo52" style={{ display: deliveryOpen ? 'block' : 'none' }}>
        Details of delivery
      </div>

      <span
        className="levo25"
        title="Payments"
        style={{ backgroundImage: "url('/assets/im/payments.png')" }}
        onClick={() => setPaymentsOpen((prev) => !prev)}
      >
        Payments <i className={`fas fa-angle-${paymentsOpen ? 'up' : 'down'}`}></i>
      </span>
      <div id="levo25" style={{ display: paymentsOpen ? 'block' : 'none' }}>
        Details of payment
      </div>

      <span
        className="levo23"
        title="Quality"
        style={{ backgroundImage: "url('/assets/im/quality.png')" }}
        onClick={() => setQualityOpen((prev) => !prev)}
      >
        Quality <i className={`fas fa-angle-${qualityOpen ? 'up' : 'down'}`}></i>
      </span>
      <div id="levo23" style={{ display: qualityOpen ? 'block' : 'none' }}>
        Quality details
      </div>
    </div>
  );
}
