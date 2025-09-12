import React, { useState } from 'react';
import './CheckoutForm.css';

export default function CheckoutForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <button className="btn">Place Order</button>
    </form>
  );
}
