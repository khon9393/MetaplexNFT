
import Link from "next/link";
import { FC } from "react";

export const PrivacyPolicyView: FC = ({ }) => {

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to Candibar NFT. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services to buy, sell, and trade NFTs for Candibar SPL Solana tokens and vice versa.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Wallet addresses and blockchain transaction data</li>
        <li>Contact information, if provided (e.g., email)</li>
        <li>Usage data and cookies to improve website performance</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        Your information is used to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Facilitate NFT transactions and token exchanges</li>
        <li>Enhance user experience and website functionality</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal information. We may share information with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Service providers assisting with website operations</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement security measures to protect your information. However, no online platform is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You may have rights regarding your personal data, including access, correction, deletion, and data portability, subject to applicable laws.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:support@candibarnft.com" className="text-blue-500 underline">support@candibarnft.com</Link>.
      </p>
    </div>
  );
};
