'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // ここでフォームデータを処理します（例：APIに送信）
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      {isSubmitted ? (
        <p className="text-green-600">
          お問い合わせありがとうございます。近日中にご連絡いたします。
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              お名前
            </label>
            <input
              {...register('name', { required: '名前は必須です' })}
              id="name"
              className="w-full px-3 py-2 border rounded"
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              メールアドレス
            </label>
            <input
              {...register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
              id="email"
              className="w-full px-3 py-2 border rounded"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              メッセージ
            </label>
            <textarea
              {...register('message', { required: 'メッセージは必須です' })}
              id="message"
              rows={5}
              className="w-full px-3 py-2 border rounded"
            ></textarea>
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            送信
          </button>
        </form>
      )}
    </div>
  );
}
