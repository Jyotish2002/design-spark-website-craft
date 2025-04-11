import { NextResponse } from 'next/server';
import { emailExists, createUser } from '@/app/utils/db';
import { generateOTP, storeOTP, sendOTP } from '@/app/utils/otp';

export async function POST(req: Request) {
  try {
    const { email, password, name, userType } = await req.json();

    if (!email || !password || !name || !userType) {
      return NextResponse.json(
        { error: 'Email, password, name, and user type are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    if (emailExists(email)) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Create user (unverified initially)
    createUser(email, password, userType);

    // Generate and store OTP
    const otp = generateOTP();
    storeOTP(email, otp);

    // Send OTP email
    const emailSent = await sendOTP(email, otp);

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send verification email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'User created successfully. Please verify your email.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
} 