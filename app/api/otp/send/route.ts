import { NextResponse } from 'next/server';
import { generateOTP, storeOTP, sendOTP } from '@/app/utils/otp';
import { emailExistsForUserType, emailExists } from '@/app/utils/db';

export async function POST(request: Request) {
  try {
    const { email, userType } = await request.json();

    if (!email || !userType) {
      return NextResponse.json(
        { error: 'Email and user type are required' },
        { status: 400 }
      );
    }

    // First check if email exists for any user type
    if (emailExists(email)) {
      // Then check if it exists for the requested user type
      if (emailExistsForUserType(email, userType)) {
        return NextResponse.json(
          { error: 'Email already registered for this user type' },
          { status: 400 }
        );
      } else {
        // Email exists but for a different user type
        return NextResponse.json(
          { error: 'This email is already registered as a different user type' },
          { status: 400 }
        );
      }
    }

    // Generate OTP
    const otp = generateOTP();

    // Store OTP
    storeOTP(email, otp);

    // Send OTP via email
    const sent = await sendOTP(email, otp);

    if (!sent) {
      return NextResponse.json(
        { error: 'Failed to send OTP' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error in send OTP:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 