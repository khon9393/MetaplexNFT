
import Link from "next/link";
import { FC } from "react";

export const TermsOfServiceView: FC = ({ }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-300">
      <h1 className="text-3xl font-bold mb-4">Candibar NFT Terms of Service</h1>
      <p className="mb-4">
      Welcome to Candibar NFT. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully.
      </p>
  
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
      By using Candibar NFT, you agree to comply with and be legally bound by these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, you are not authorized to use our services.
      </p>
  
      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Eligibility</h2>
      <p className="mb-4">
      You must be at least 18 years old or the age of majority in your jurisdiction to use Candibar NFT. By using our services, you represent and warrant that you meet this requirement.
      </p>
  
      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Services Provided</h2>
      <p className="mb-4">
      Candibar NFT allows users to buy, sell, and trade NFTs using Candibar SPL Solana tokens and vice versa. We do not provide custodial services; users are responsible for their own wallets and transactions.
      </p>
  
      <h2 className="text-2xl font-semibold mt-6 mb-2">4. User Responsibilities</h2>
      <p className="mb-4">
      Users are responsible for:
      </p>
      <ul className="list-disc list-inside mb-4">
      <li>Maintaining the security of their accounts and wallets.</li>
      <li>Ensuring all transactions are lawful and comply with applicable regulations.</li>
      <li>Understanding the risks associated with blockchain technology and NFTs.</li>
      </ul>
  
      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Prohibited Activities</h2>
      <p className="mb-4">
      You agree not to engage in activities such as:
      </p>
      <ul className="list-disc list-inside mb-4">
      <li>Fraudulent or deceptive practices.</li>
      <li>Money laundering, terrorist financing, or other illegal activities.</li>
      <li>Attempting to interfere with the platform&apos;s security or functionality.</li>
      </ul>
  
      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Disclaimers</h2>
      <p className="mb-4">
      Candibar NFT provides services &apos;as is&apos; without warranties of any kind. We do not guarantee the accuracy, reliability, or availability of the platform and are not responsible for any financial losses incurred through the use of our services.
      </p>
  
      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">
      To the maximum extent permitted by law, Candibar NFT shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
      </p>
  
      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
      <p className="mb-4"></p>
          <p className="mb-4">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of the revised terms.
          </p>
    
          <h2 className="text-2xl font-semibold mt-6 mb-2">9. Governing Law</h2>
          <p className="mb-4">
            These Terms of Service are governed by and construed in accordance with the laws of the applicable jurisdiction without regard to its conflict of law principles.
          </p>
    
          <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contact Information</h2>
          <p className="mb-4">
            For any questions regarding these Terms of Service, please contact us at <Link href={`mailto:${process.env.NEXT_PUBLIC_RPC_SUPPORT_EMAIL}`} className="text-blue-500 underline">{process.env.NEXT_PUBLIC_RPC_SUPPORT_EMAIL}</Link>.
          </p>
        </div>
      );
};
