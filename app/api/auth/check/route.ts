import { NextResponse } from 'next/server';
import { emailExistsForUserType } from '@/app/utils/db';

export async function POST(request: Request) {
  try {
    const { email, userType } = await request.json();

    if (!email || !userType) {
      return NextResponse.json(
        { error: 'Email and user type are required' },
        { status: 400 }
      );
    }

    // Check if email exists for this user type
    const exists = emailExistsForUserType(email, userType);

    return NextResponse.json({ exists });
  } catch (error) {
    console.error('Error in check account:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 