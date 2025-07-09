// app/api/telegram/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

// Ensure these environment variables are loaded
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: Request) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram bot token or chat ID is not set in environment variables.');
    return NextResponse.json(
      { message: 'Server configuration error: Telegram credentials missing.' },
      { status: 500 }
    );
  }

  try {
    const formData = await request.json();

    const {
      fullName,
      email,
      nationalId,
      courseCompletedLabel,
      courseFeedback,
      isReadyForTest,
      whyWorkNow,
      requestId
    } = formData;

    // Format the message for Telegram
    const messageText = `
*طلب اختبار تأهيل جديد:*

*رقم الطلب:* \`${requestId}\`
*الاسم الكامل:* ${fullName}
*البريد الإلكتروني:* ${email}
*الرقم القومي:* ${nationalId}
*الكورس الذي أتمه:* ${courseCompletedLabel}

*تقييم المنهج والكورس:*
\`\`\`
${courseFeedback}
\`\`\`

*جاهز للاختبارات؟:* ${isReadyForTest ? '✅ نعم، جاهز' : '❌ لا، لست جاهز بعد'}

*لماذا يريد دخول سوق العمل حالياً؟*
\`\`\`
${whyWorkNow}
\`\`\`
`.trim(); // Use trim() to remove leading/trailing whitespace

    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await axios.post(telegramApiUrl, {
      chat_id: TELEGRAM_CHAT_ID,
      text: messageText,
      parse_mode: 'Markdown', // Use Markdown for formatting
    });

    return NextResponse.json({ message: 'Form submitted successfully and message sent to Telegram!' }, { status: 200 });

  } catch (error: any) {
    console.error('Error processing application form or sending to Telegram:', error);
    return NextResponse.json(
      { message: 'Failed to process application or send to Telegram.', error: error.message },
      { status: 500 }
    );
  }
}