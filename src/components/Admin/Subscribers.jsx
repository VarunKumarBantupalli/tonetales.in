// src/pages/ManageSubscribers.jsx
import React, { useState, useEffect } from "react";
import { db } from "../../authentication/firebase";
import { collection, getDocs } from "firebase/firestore";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "subscribers"));
        const subscriberList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubscribers(subscriberList);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Subscribers</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Email</th>
            <th className="border p-2">Subscription Date</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.length > 0 ? (
            subscribers.map((subscriber) => (
              <tr key={subscriber.id} className="text-center">
                <td className="border p-2">{subscriber.email}</td>
                <td className="border p-2">{subscriber.date || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center p-4">No Subscribers Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Subscribers;
