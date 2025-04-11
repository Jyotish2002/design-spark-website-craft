import { NextResponse } from 'next/server';
import { verifyOTP } from '@/app/utils/otp';
import { createUser, verifyUser, getUser } from '@/app/utils/db';

export async function POST(request: Request) {
  try {
    const { email, otp, password, userType } = await request.json();

    if (!email || !otp || !password || !userType) {
      return NextResponse.json(
        { error: 'Email, OTP, password, and user type are required' },
        { status: 400 }
      );
    }

    // Verify OTP
    const isValid = verifyOTP(email, otp);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid or expired OTP' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = getUser(email);
    
    if (existingUser) {
      // If user exists, just verify them
      verifyUser(email);
    } else {
      // Create and verify new user
      createUser(email, password, userType);
      verifyUser(email);
    }

    return NextResponse.json({ 
      message: 'OTP verified successfully',
      verified: true
    });
  } catch (error) {
    console.error('Error in verify OTP:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 