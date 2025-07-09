// app/api/telegram/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

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
`.trim();

    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await axios.post(telegramApiUrl, {
      chat_id: TELEGRAM_CHAT_ID,
      text: messageText,
      parse_mode: 'Markdown',
    });

    return NextResponse.json({ message: 'Form submitted successfully and message sent to Telegram!' }, { status: 200 });

  } catch (error: unknown) { // Changed 'any' to 'unknown'
    console.error('Error processing application form or sending to Telegram:', error);
    // Safely check if error is an instance of Error
    let errorMessage = 'An unknown error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (axios.isAxiosError(error)) { // Check if it's an Axios error
        errorMessage = error.response?.data?.description || error.message;
    }
    return NextResponse.json(
      { message: 'Failed to process application or send to Telegram.', error: errorMessage },
      { status: 500 }
    );
  }
}