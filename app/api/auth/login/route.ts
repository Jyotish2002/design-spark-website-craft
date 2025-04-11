import { NextResponse } from 'next/server';
import { validateLogin, getUser, isUserVerified } from '@/app/utils/db';

export async function POST(request: Request) {
  try {
    const { email, password, userType } = await request.json();

    if (!email || !password || !userType) {
      return NextResponse.json(
        { error: 'Email, password, and user type are required' },
        { status: 400 }
      );
    }

    // Get user to check if it exists
    const user = getUser(email);
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found. Please check your email or sign up.' },
        { status: 401 }
      );
    }
    
    // Check if user type matches
    if (user.userType !== userType) {
      return NextResponse.json(
        { error: `This email is registered as a ${user.userType}, not a ${userType}.` },
        { status: 401 }
      );
    }
    
    // Check if user is verified
    if (!isUserVerified(email)) {
      return NextResponse.json(
        { error: 'Your account is not verified. Please check your email for verification instructions.' },
        { status: 401 }
      );
    }
    
    // Validate login credentials
    if (user.password !== password) {
      return NextResponse.json(
        { error: 'Incorrect password. Please try again.' },
        { status: 401 }
      );
    }

    // All checks passed, login successful
    return NextResponse.json({ 
      message: 'Login successful',
      user: {
        email: user.email,
        userType: user.userType
      }
    });
  } catch (error) {
    console.error('Error in login:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 