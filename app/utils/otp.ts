import nodemailer from 'nodemailer';

// Store OTPs temporarily (in production, use a database)
const otpStore = new Map<string, { otp: string; timestamp: number }>();

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Generate a 6-digit OTP
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Store OTP with timestamp
export function storeOTP(email: string, otp: string): void {
  otpStore.set(email, {
    otp,
    timestamp: Date.now(),
  });
}

// Verify OTP
export function verifyOTP(email: string, otp: string): boolean {
  const storedData = otpStore.get(email);
  if (!storedData) return false;

  // Check if OTP is expired (5 minutes)
  if (Date.now() - storedData.timestamp > 5 * 60 * 1000) {
    otpStore.delete(email);
    return false;
  }

  // Check if OTP matches
  if (storedData.otp === otp) {
    otpStore.delete(email);
    return true;
  }

  return false;
}

// Send OTP via email
export async function sendOTP(email: string, otp: string): Promise<boolean> {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for Career Counseling Platform',
      html: `
        <h1>OTP Verification</h1>
        <p>Your OTP for registration is: <strong>${otp}</strong></p>
        <p>This OTP will expire in 5 minutes.</p>
        <p>If you didn't request this OTP, please ignore this email.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending OTP:', error);
    return false;
  }
} 