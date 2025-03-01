"use client";

import { useState, useEffect, Fragment } from "react";
import { Dialog, DialogTitle, Transition } from "@headlessui/react";

interface ModalProps {
  MessageTitle: string;
  MessageTxt: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function CandibarModal({ MessageTitle: msgtitle, MessageTxt: msgtxt, isOpen, onClose }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-xl shadow-lg w-full max-h-[80vh] overflow-hidden">
            <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-white">
              {msgtitle}
            </DialogTitle>
            <h1 className="text-1xl font-bold text-gray-600 dark:text-white p-2">
              {msgtxt}
            </h1>
            <div className="flex items-center justify-center">
              {/* ✅ Close Button */}
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
