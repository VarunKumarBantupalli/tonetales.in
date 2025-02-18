import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import gsap from 'gsap';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../authentication/firebase.js'; // Ensure db is properly exported from this file

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState('idle'); // Removed TypeScript-style annotation

  const formRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
    })
      .from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from(formRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5');
  }, []);

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setStatus('error');
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      setMessage("You're all set! Welcome to our community.");
      setEmail("");

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage("Oops! Something went wrong. Please try again.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="relative min-h-[500px]  text-white overflow-hidden">


      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <div ref={titleRef} className="inline-block">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-bronze-start to-bronze-end rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative px-7 py-4 bg-black rounded-lg flex items-center gap-3">
                  <Mail className="w-8 h-8 text-amber" />
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bronze-start to-bronze-end text-transparent bg-clip-text">
                    Join Our Newsletter
                  </h2>
                </div>
              </div>
            </div>

            <p ref={contentRef} className="text-gray-300 text-lg max-w-2xl mx-auto">
              Stay in tune with the latest updates, and special offers from our musical journey.
            </p>
          </div>

          {/* Subscription Form */}
          <div ref={formRef} className="max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-bronze-start to-bronze-end rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative space-y-4">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:gold-medium focus:border-transparent"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="px-6 py-3 bg-gradient-to-r from-bronze-start to-bronze-end rounded-lg font-medium text-white hover:from-gold-light hover:to-gold-dark transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                {/* Status Message */}
                {message && (
                  <div className={`flex items-center justify-center gap-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}>
                    {status === 'success' ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                    <p>{message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Newsletter;
