import { Feature, MerchantStep } from '@/types';

export const FEATURES: Feature[] = [
  {
    icon: "💳",
    title: "Pay Bills",
    description: "Handle all your bill payments with a few taps—no queues, no hassle."
  },
  {
    icon: "⚡",
    title: "Electricity",
    description: "Top up your electricity quickly and stay powered at all times."
  },
  {
    icon: "📱",
    title: "Buy Airtime & Data",
    description: "Recharge your phone instantly—any network, anytime."
  },
  {
    icon: "💸",
    title: "Send Money",
    description: "Send funds from your Sharp Pocket wallet to friends and family securely."
  },
  {
    icon: "🏦",
    title: "Withdraw Easily",
    description: "Need cash? Withdraw funds from your app to any account, fast."
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    description: "All your transactions are protected with top-level security and encryption."
  }
];

export const MERCHANT_STEPS: MerchantStep[] = [
  {
    step: 1,
    title: "Sign Up & Link Bank Account",
    description: "Quick onboarding process with secure bank linking"
  },
  {
    step: 2,
    title: "Generate Your QR Code",
    description: "Get a unique QR code tied to your account"
  },
  {
    step: 3,
    title: "Display & Receive Payments",
    description: "Customers scan to pay directly to your bank account"
  }
];