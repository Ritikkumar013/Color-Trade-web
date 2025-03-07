"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Transaction {
  id: number;
  type: string; // Deposit, Withdrawal, etc.
  amount: number;
  status: string; // Success, Failed, etc.
  createdAt: string;
}

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://20.235.246.99:4500/api/wallet/transactions"; // Replace with actual API

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Failed to show Transaction");
          setLoading(false);
          return;
        }

        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }

        const data = await response.json();
        // Filter transactions to show only withdrawals (debits)
        const filteredTransactions = data.data.filter(
          (transaction: Transaction) => transaction.type === "debit"
        );

        setTransactions(filteredTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-[100vh] bg-green-50 relative">
      {/* Header Section */}
      <div className="bg-[#1ab266] px-5">
        <div className="relative">
          <button
            onClick={handleBackButtonClick}
            className="absolute left-0 top-[15px]"
          >
            <Image
              src="/back-white.png"
              alt="back-button"
              width={100}
              height={100}
              className="w-5"
            />
          </button>
        </div>
        <h1 className="text-xl font-semibold text-white text-center py-3">
          Withdrawal History
        </h1>
      </div>

      {/* Transactions Section */}
      <div className="px-5">
        {loading ? (
          <p className="text-center mt-5">Loading transactions...</p>
        ) : transactions.length > 0 ? (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between p-4 bg-white my-4 rounded-xl"
            >
              <div>
                <h1 className="text-lg font-bold uppercase">
                  {transaction.type}
                </h1>
                <p className="text-sm">
                  {new Date(transaction.createdAt).toLocaleString()}
                </p>
              </div>
              <div>
                <h1 className="text-xl text-[#1ab266] font-bold">
                  {transaction.status}
                </h1>
                <p className="text-md font-semibold text-red-500">
                  - ₹ {transaction.amount}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-5">No transactions found</p>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
