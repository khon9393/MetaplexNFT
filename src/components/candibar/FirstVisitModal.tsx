// components/FirstVisitModal.tsx

import { useEffect, useState } from 'react';
import { getWithExpiry, setWithExpiry } from '../../utils/localStorage'; // Adjust the path if needed
import Link from 'next/link';

const FirstVisitModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    const hasVisited = getWithExpiry<boolean>('hasVisited');

    if (!hasVisited) {
      
      setIsModalOpen(true);
      // Store the visit with a 24-hour expiry (optional)
      setWithExpiry('hasVisited', true, 24 * 60 * 60 * 1000); // 24 hours
    }


    const isFirstVisit = localStorage.getItem('hasVisited') === null;
    if (isFirstVisit) {
      setIsModalOpen(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div
        className="fixed text-black inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={handleCloseModal} // Click outside to close
      >
        <div
          className="bg-yellow-200 p-6 rounded-lg max-w-lg w-full"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
            <h3 className="text-xl font-semibold mb-4 text-red-500"><strong>Important Information</strong></h3>
            <div>
            <p className="mb-4 text-lg leading-relaxed">
              If you&apos;re experiencing issues with Phantom Wallet blocking minting requests, 
              please note that this is likely a precautionary measure. 
              The website is new, and the team is just being cautious. 
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              If you trust the source and want to continue, you can choose &apos;Proceed&apos; or &apos;Confirm (Unsafe)&apos; anyway to mint. 
              Rest assured, you can still proceed with the minting process.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              We are actively working to get our website added to Phantom&apos;s whitelist as quickly as possible to ensure a smoother experience for all users. Thank you for your patience as we work through this.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Visit our <Link href="/faq" className="text-blue-500 underline">FAQ</Link> for more information.
            </p>
            </div>
            <div className="flex justify-end">
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default FirstVisitModal;
