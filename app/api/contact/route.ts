import { NextRequest, NextResponse } from 'next/server';
import {
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_RAW,
  PHONE_TEL_URI,
  BUSINESS_HOURS,
  ADDRESS_INFO,
  CONTACT_CHANNELS,
  isValidIranianPhone,
} from '@/lib/contact';

// In-memory contact submission store for active session
const contactRequests: Array<{
  id: string;
  phone?: string;
  name?: string;
  message?: string;
  channel?: string;
  timestamp: string;
}> = [];

export async function GET() {
  return NextResponse.json({
    status: 'success',
    data: {
      brand: 'کرمان تجربه',
      phone: {
        display: PHONE_NUMBER_DISPLAY,
        raw: PHONE_NUMBER_RAW,
        tel: PHONE_TEL_URI,
      },
      businessHours: BUSINESS_HOURS,
      address: ADDRESS_INFO,
      channels: CONTACT_CHANNELS,
      recentRequestsCount: contactRequests.length,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, channel, phone, name, message } = body;

    // Track click or channel selection
    if (action === 'track_click') {
      const record = {
        id: `click_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        channel: channel || 'general',
        timestamp: new Date().toISOString(),
      };
      contactRequests.push(record);
      return NextResponse.json({ success: true, recorded: record });
    }

    // Direct callback request / message
    if (phone && !isValidIranianPhone(phone)) {
      return NextResponse.json(
        { success: false, error: 'شماره تلفن وارد شده نامعتبر است' },
        { status: 400 }
      );
    }

    const newRequest = {
      id: `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name || 'مخاطب کرمان تجربه',
      phone: phone || PHONE_NUMBER_RAW,
      message: message || '',
      channel: channel || 'direct_web',
      timestamp: new Date().toISOString(),
    };

    contactRequests.push(newRequest);

    return NextResponse.json({
      success: true,
      message: 'درخواست تماس با موفقیت در سیستم کرمان تجربه ثبت شد',
      requestId: newRequest.id,
      timestamp: newRequest.timestamp,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'خطایی در پردازش اطلاعات رخ داد' },
      { status: 500 }
    );
  }
}
