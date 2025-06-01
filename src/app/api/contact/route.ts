import { NextRequest, NextResponse } from 'next/server'

// Your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyfQTIsNxuWd624gGJL1IfqWdKdypRwsSwr5atwjf0l_ptPCfa5eeGvHRE7OlDZPRWdMA/exec'

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming form data
    const formData = await request.json()
    
    // Validate required fields
    if (!formData.email || !formData.fullName) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Forward the data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your information has been submitted successfully.',
      })
    } else {
      throw new Error(result.message || 'Failed to save data')
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      {
        success: false,
        message: 'There was an error submitting your information. Please try again.',
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  )
} 