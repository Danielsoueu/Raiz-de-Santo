'use client';

/**
 * Environment Validation Hook
 * Validates required environment variables on client side
 */

interface EnvValidationResult {
  isValid: boolean;
  missingVars: string[];
  warnings: string[];
}

export function useEnvValidation(): EnvValidationResult {
  const missingVars: string[] = [];
  const warnings: string[] = [];

  // Required variables
  const requiredVars = ['NEXT_PUBLIC_GA_ID'];
  
  // Optional but recommended variables
  const optionalVars = [
    { name: 'GEMINI_API_KEY', warning: 'Gemini API key not configured. AI features may not work.' },
  ];

  // Check required variables
  requiredVars.forEach((varName) => {
    if (!process.env[varName]) {
      missingVars.push(varName);
    }
  });

  // Check optional variables
  optionalVars.forEach(({ name, warning }) => {
    if (!process.env[name]) {
      warnings.push(warning);
    }
  });

  // Validate WhatsApp number format if provided
  const whatsappNumber = process.env.WHATSAPP_NUMBER;
  if (whatsappNumber && !/^\d{10,15}$/.test(whatsappNumber)) {
    warnings.push('WhatsApp number format may be invalid. Expected 10-15 digits.');
  }

  return {
    isValid: missingVars.length === 0,
    missingVars,
    warnings,
  };
}

/**
 * Validate environment variables on startup
 * Should be called in layout or root component
 */
export function validateEnvironment(): void {
  if (typeof window === 'undefined') {
    // Server-side validation
    const geminiKey = process.env.GEMINI_API_KEY;
    
    if (!geminiKey || geminiKey === 'MY_GEMINI_API_KEY') {
      console.warn('⚠️  GEMINI_API_KEY is not configured or using default value.');
      console.warn('   Set a valid API key in your environment variables.');
    }
  }
}
