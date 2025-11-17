// ============================================
// EXEMPLO DE API ROUTE PARA RESEND
// ============================================
// Este arquivo é um EXEMPLO de como integrar o Resend
// no backend. Não está sendo usado no momento!
//
// OPÇÕES DE IMPLEMENTAÇÃO:
// 1. Next.js: Crie em pages/api/contact.ts
// 2. Express: Crie uma rota POST
// 3. Netlify Functions: Crie em netlify/functions/contact.ts
// 4. Vercel Serverless: Crie em api/contact.ts
//
// ============================================

// Opção 1: Next.js API Route
// Arquivo: pages/api/contact.ts ou app/api/contact/route.ts

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { to, subject, html, from, replyTo } = await request.json();

    const data = await resend.emails.send({
      from: 'Portfólio <onboarding@resend.dev>', // Mude para seu domínio verificado
      to: to,
      subject: subject,
      html: html,
      replyTo: replyTo,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ============================================

// Opção 2: Express.js
// Arquivo: server.js ou routes/contact.js

const express = require('express');
const { Resend } = require('resend');

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { to, subject, html, from, replyTo } = req.body;

    const data = await resend.emails.send({
      from: 'Portfólio <onboarding@resend.dev>',
      to: to,
      subject: subject,
      html: html,
      replyTo: replyTo,
    });

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000);

// ============================================

// Opção 3: Netlify Function
// Arquivo: netlify/functions/contact.ts

import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { to, subject, html, from, replyTo } = JSON.parse(event.body || '{}');

    const data = await resend.emails.send({
      from: 'Portfólio <onboarding@resend.dev>',
      to: to,
      subject: subject,
      html: html,
      replyTo: replyTo,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

// ============================================
// CONFIGURAÇÃO DO RESEND
// ============================================
//
// 1. Crie uma conta em https://resend.com
// 2. Gere uma API key
// 3. Adicione ao .env:
//    RESEND_API_KEY=re_xxxxxxxxxx
//
// 4. Verifique seu domínio no painel do Resend
// 5. Atualize o "from" para usar seu domínio:
//    from: 'Seu Nome <contato@seudominio.com>'
//
// ============================================
// USO NO FRONTEND
// ============================================
//
// No arquivo useContactForm.ts, descomente a seção:
//
// const response = await fetch('/api/contact', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     to: 'seu-email@example.com',
//     subject: `[Portfólio] ${data.subject}`,
//     html: emailHtml,
//     from: data.email,
//     replyTo: data.email,
//   }),
// })
//
// ============================================
