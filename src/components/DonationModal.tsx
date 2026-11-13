import React, { useState, useEffect } from 'react';
import {
  X,
  Heart,
  CheckCircle2,
  Smartphone,
  CreditCard,
  Lock,
  Gift,
  Download,
  Printer,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';
import { Currency, DonationFrequency, PaymentMethod, DonationTier, DonationDetails } from '../types';
import { DONATION_TIERS, FOUNDATION_META } from '../data/foundationData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
  initialCause?: string;
  currency: Currency;
  onToggleCurrency: (c: Currency) => void;
  onDonationComplete: (details: DonationDetails) => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialAmount,
  initialCause,
  currency,
  onToggleCurrency,
  onDonationComplete,
}) => {
  // Selected tier / amount
  const [frequency, setFrequency] = useState<DonationFrequency>('once');
  const [selectedTier, setSelectedTier] = useState<string>(
    initialAmount ? 'custom' : 'school_kit'
  );
  const [customAmount, setCustomAmount] = useState<string>(
    initialAmount ? String(initialAmount) : ''
  );
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mpesa');

  // Donor details
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');

  // Dedication
  const [isDedicated, setIsDedicated] = useState(false);
  const [dedicationType, setDedicationType] = useState<'honor' | 'memory'>('honor');
  const [dedicationName, setDedicationName] = useState('');
  const [dedicationMessage, setDedicationMessage] = useState('');

  // Card details
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Processing & Success State
  const [isProcessing, setIsProcessing] = useState(false);
  const [stkPromptActive, setStkPromptActive] = useState(false);
  const [stkPin, setStkPin] = useState('');
  const [stkCountdown, setStkCountdown] = useState(30);
  const [completedDonation, setCompletedDonation] = useState<DonationDetails | null>(null);

  useEffect(() => {
    if (isOpen) {
      setCompletedDonation(null);
      setStkPromptActive(false);
      if (initialAmount) {
        setSelectedTier('custom');
        setCustomAmount(String(initialAmount));
      } else {
        setSelectedTier('school_kit');
        setCustomAmount('');
      }
    }
  }, [isOpen, initialAmount]);

  // M-Pesa STK countdown timer
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isOpen && stkPromptActive && stkCountdown > 0) {
      timer = setInterval(() => {
        setStkCountdown((c) => c - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, stkPromptActive, stkCountdown]);

  if (!isOpen) return null;

  // Compute final amount
  const getCalculatedAmount = (): number => {
    if (selectedTier === 'custom') {
      const parsed = Number(customAmount);
      return parsed > 0 ? parsed : currency === 'USD' ? 25 : 3500;
    }
    const tier = DONATION_TIERS.find((t) => t.id === selectedTier);
    if (!tier) return currency === 'USD' ? 50 : 7500;
    return currency === 'USD' ? tier.usdAmount : tier.kesAmount;
  };

  const currentAmount = getCalculatedAmount();

  // Dynamic Impact Statement
  const getImpactStatement = (): string => {
    if (currency === 'USD') {
      if (currentAmount < 20) return `Feeds a family in Huruma for ${Math.max(1, Math.round(currentAmount / 2))} days`;
      if (currentAmount < 40) return `Provides essential clinic medicines & hygiene kits for ${Math.round(currentAmount / 10)} children`;
      if (currentAmount < 90) return `Covers school uniform, shoes, textbooks & supplies for ${Math.round(currentAmount / 50)} child`;
      return `Funds a complete poultry or tailoring micro-business grant for a widowed mother`;
    } else {
      if (currentAmount < 3000) return `Feeds a family in Eldoret for ${Math.max(1, Math.round(currentAmount / 250))} days`;
      if (currentAmount < 6000) return `Provides clinic medicines & sanitary packs for ${Math.round(currentAmount / 1200)} young girls`;
      if (currentAmount < 14000) return `Provides full school uniform, shoes & textbooks for a child`;
      return `Funds seed capital and training for a widow's micro-enterprise`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorEmail.trim()) {
      return;
    }

    if (paymentMethod === 'mpesa') {
      // Trigger STK Push Prompt simulation
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStkPromptActive(true);
        setStkCountdown(30);
      }, 1200);
    } else {
      // Card / PayPal processing
      setIsProcessing(true);
      setTimeout(() => {
        finalizeDonation('TXN-' + Math.random().toString(36).substring(2, 9).toUpperCase());
      }, 1500);
    }
  };

  const handleConfirmStkPin = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setStkPromptActive(false);
      finalizeDonation('MPESA-QK' + Math.floor(100000 + Math.random() * 900000) + 'K');
    }, 1200);
  };

  const finalizeDonation = (refNumber: string) => {
    setIsProcessing(false);
    const donation: DonationDetails = {
      amount: currentAmount,
      currency,
      frequency,
      tierId: selectedTier,
      paymentMethod,
      donorName,
      donorEmail,
      donorPhone,
      isDedicated,
      dedicationType,
      dedicationName,
      dedicationMessage,
      receiptNumber: refNumber,
      timestamp: new Date().toLocaleString(),
    };
    setCompletedDonation(donation);
    onDonationComplete(donation);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1D3C6E]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative my-8 border border-[#9ABDE3]/60 overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#1D3C6E] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C02523] border border-white/15 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold">
                {completedDonation ? 'Official Donation Receipt' : 'Support Putting a Smile On Them'}
              </h2>
              <p className="text-xs text-[#9ABDE3]">
                {initialCause ? `Initiative: ${initialCause}` : 'M-Pesa Till 3131630 · Kingdom Bank 4012107537002'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {completedDonation ? (
            /* SUCCESS & RECEIPT STATE */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FAEB8E] text-[#063BAD] flex items-center justify-center shadow-inner border border-[#E8DB7A]">
                  <CheckCircle2 className="w-9 h-9 text-[#063BAD]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1D3C6E]">
                  Thank You, {completedDonation.donorName}!
                </h3>
                <p className="text-sm text-[#4365A1] max-w-md mx-auto">
                  Your generous gift of{' '}
                  <strong className="text-[#1D3C6E]">
                    {completedDonation.currency === 'USD' ? '$' : 'KES '}{' '}
                    {completedDonation.amount.toLocaleString()}
                  </strong>{' '}
                  has been received and routed directly to our Eldoret field operations.
                </p>
              </div>

              {/* Official Tax-Deductible Receipt Card */}
              <div className="bg-[#F3F1E6] border border-[#9ABDE3] rounded-xl p-5 space-y-4 print:border-black">
                <div className="flex justify-between items-start border-b border-[#9ABDE3]/60 pb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#063BAD]">
                      Receipt Reference
                    </span>
                    <div className="text-base font-mono font-bold text-[#1D3C6E]">
                      {completedDonation.receiptNumber}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#6F8CAD] block">Date & Time</span>
                    <span className="text-xs font-semibold text-[#263864]">
                      {completedDonation.timestamp}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#6F8CAD] block">Donor Name</span>
                    <strong className="text-[#1D3C6E] text-sm">{completedDonation.donorName}</strong>
                    <span className="text-[#4365A1] block">{completedDonation.donorEmail}</span>
                  </div>
                  <div>
                    <span className="text-[#6F8CAD] block">Payment Method</span>
                    <strong className="text-[#1D3C6E] uppercase text-sm">
                      {completedDonation.paymentMethod === 'mpesa' ? 'M-Pesa Express' : completedDonation.paymentMethod}
                    </strong>
                    <span className="text-[#4365A1] block">
                      Frequency: {completedDonation.frequency === 'monthly' ? 'Monthly Partner' : 'One-time'}
                    </span>
                  </div>
                </div>

                {completedDonation.isDedicated && (
                  <div className="bg-[#FAEB8E]/60 p-3 rounded-lg border border-[#E8DB7A] text-xs">
                    <span className="font-bold text-[#1D3C6E] block">
                      Dedicated in {completedDonation.dedicationType === 'honor' ? 'Honor' : 'Memory'} of: {completedDonation.dedicationName}
                    </span>
                    {completedDonation.dedicationMessage && (
                      <p className="text-[#263864] italic mt-0.5">
                        "{completedDonation.dedicationMessage}"
                      </p>
                    )}
                  </div>
                )}

                <div className="pt-2 border-t border-[#9ABDE3]/60 flex justify-between items-center text-xs text-[#4365A1]">
                  <span>Organization: Putting a Smile on Them Foundation</span>
                  <span>Eldoret, Kenya · Reg. NGO</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-lg border border-[#9ABDE3] text-[#1D3C6E] hover:bg-[#F3F1E6] text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-[#4365A1]" />
                  <span>Print Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg bg-[#063BAD] hover:bg-[#224EA6] text-white text-xs font-bold shadow-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : stkPromptActive ? (
            /* M-PESA STK PUSH SIMULATOR MODAL */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FAEB8E] flex items-center justify-center animate-pulse border border-[#E8DB7A]">
                <Smartphone className="w-8 h-8 text-[#063BAD]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#1D3C6E]">
                  M-Pesa Prompt Sent to {donorPhone || '+254 7XX XXX XXX'}
                </h3>
                <p className="text-sm text-[#4365A1] max-w-sm mx-auto">
                  Please check your phone and enter your M-Pesa PIN to authorize payment of{' '}
                  <strong className="text-[#1D3C6E]">
                    KES {currentAmount.toLocaleString()}
                  </strong>.
                </p>
              </div>

              {/* Interactive Phone Prompt Box */}
              <div className="max-w-xs mx-auto bg-[#1D3C6E] text-white p-5 rounded-2xl shadow-xl space-y-4 border border-[#4365A1]">
                <div className="flex items-center justify-between text-[11px] text-[#9ABDE3] border-b border-white/15 pb-2">
                  <span>SAFARICOM M-PESA BUY GOODS</span>
                  <span className="font-mono text-[#FAEB8E]">{stkCountdown}s remaining</span>
                </div>

                <div className="text-left text-xs space-y-1">
                  <p className="text-white/90">
                    Pay <span className="text-white font-bold">KES {currentAmount.toLocaleString()}</span> to <span className="text-[#FAEB8E] font-bold">PUTTING A SMILE</span>?
                  </p>
                  <p className="text-[#9ABDE3] text-[10px]">Till Number: 3131630</p>
                </div>

                <div className="pt-1">
                  <input
                    type="password"
                    maxLength={4}
                    placeholder="Enter 4-digit PIN"
                    value={stkPin}
                    onChange={(e) => setStkPin(e.target.value)}
                    className="w-full bg-[#263864] border border-[#689FF1]/50 text-center font-mono text-lg tracking-widest text-[#FAEB8E] rounded-lg py-1.5 focus:outline-hidden focus:ring-2 focus:ring-[#689FF1]"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleConfirmStkPin}
                  disabled={isProcessing}
                  className="w-full py-2 bg-[#C02523] hover:bg-[#9E1D1B] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Verifying with Safaricom...</span>
                    </>
                  ) : (
                    <span>Authorize Payment</span>
                  )}
                </button>
              </div>

              <div className="text-xs text-[#4365A1]">
                Manual M-Pesa option: Go to Lipa na M-Pesa &gt; Buy Goods &gt; Till <strong>3131630</strong>.
              </div>
            </div>
          ) : (
            /* DONATION FORM */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Currency & Frequency Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#F3F1E6] rounded-xl border border-[#9ABDE3]/60">
                {/* Frequency selector */}
                <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-[#9ABDE3]/60 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setFrequency('once')}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      frequency === 'once'
                        ? 'bg-[#1D3C6E] text-white shadow-xs'
                        : 'text-[#4365A1] hover:text-[#1D3C6E]'
                    }`}
                  >
                    Give Once
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                      frequency === 'monthly'
                        ? 'bg-[#063BAD] text-white shadow-xs'
                        : 'text-[#4365A1] hover:text-[#1D3C6E]'
                    }`}
                  >
                    <Heart className="w-3 h-3 fill-current" />
                    <span>Monthly Partner</span>
                  </button>
                </div>

                {/* Currency switch */}
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="text-[#4365A1]">Currency:</span>
                  <div className="flex items-center bg-white rounded-lg border border-[#9ABDE3]/60 p-0.5">
                    <button
                      type="button"
                      onClick={() => onToggleCurrency('USD')}
                      className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                        currency === 'USD'
                          ? 'bg-[#063BAD] text-white shadow-xs'
                          : 'text-[#4365A1]'
                      }`}
                    >
                      USD ($)
                    </button>
                    <button
                      type="button"
                      onClick={() => onToggleCurrency('KES')}
                      className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                        currency === 'KES'
                          ? 'bg-[#063BAD] text-white shadow-xs'
                          : 'text-[#4365A1]'
                      }`}
                    >
                      KES (Sh)
                    </button>
                  </div>
                </div>
              </div>

              {/* Giving Tiers Grid */}
              <div className="space-y-3">
                <label className="block text-xs font-extrabold text-[#1D3C6E] uppercase tracking-wider">
                  Select Giving Tier
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DONATION_TIERS.map((tier) => {
                    const isSelected = selectedTier === tier.id;
                    const amountStr =
                      currency === 'USD'
                        ? `$${tier.usdAmount}`
                        : `KES ${tier.kesAmount.toLocaleString()}`;

                    return (
                      <div
                        key={tier.id}
                        onClick={() => {
                          setSelectedTier(tier.id);
                          setCustomAmount('');
                        }}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#063BAD] bg-[#F3F1E6] ring-2 ring-[#689FF1]/35 shadow-xs'
                            : 'border-[#9ABDE3]/60 hover:border-[#063BAD]/50 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-extrabold text-[#1D3C6E] font-mono">
                            {amountStr}
                          </span>
                          {tier.badge && (
                            <span className="text-[10px] font-bold text-[#1D3C6E] bg-[#FAEB8E] border border-[#E8DB7A] px-2 py-0.5 rounded-full">
                              {tier.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-[#263864]">{tier.label}</h4>
                        <p className="text-[11px] text-[#4365A1] mt-1 line-clamp-2">
                          {tier.impactDescription}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Custom Amount Option */}
                <div
                  onClick={() => setSelectedTier('custom')}
                  className={`p-3.5 rounded-xl border transition-all ${
                    selectedTier === 'custom'
                      ? 'border-[#063BAD] bg-[#F3F1E6] ring-2 ring-[#689FF1]/35'
                      : 'border-[#9ABDE3]/60 bg-white'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label className="text-xs font-bold text-[#1D3C6E] cursor-pointer">
                      Enter Custom Amount ({currency}):
                    </label>
                    <div className="flex items-center gap-1.5 max-w-xs">
                      <span className="text-sm font-bold text-[#4365A1]">
                        {currency === 'USD' ? '$' : 'KES'}
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder={currency === 'USD' ? '150' : '20000'}
                        value={customAmount}
                        onChange={(e) => {
                          setSelectedTier('custom');
                          setCustomAmount(e.target.value.replace(/[^0-9]/g, ''));
                        }}
                        className="w-full bg-white border border-[#9ABDE3] rounded-lg px-3 py-1.5 text-sm font-bold text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                      />
                    </div>
                  </div>
                </div>

                {/* Live Impact Preview */}
                <div className="bg-[#FAEB8E]/65 border border-[#E8DB7A] rounded-xl p-3 flex items-center gap-2.5 text-xs text-[#1D3C6E]">
                  <Sparkles className="w-4 h-4 text-[#C02523] shrink-0" />
                  <span>
                    <strong>Your Direct Impact:</strong> {getImpactStatement()}
                  </span>
                </div>
              </div>

              {/* Payment Gateway Layout */}
              <div className="space-y-3">
                <label className="block text-xs font-extrabold text-[#1D3C6E] uppercase tracking-wider">
                  Payment Method
                </label>

                <div className="grid grid-cols-3 gap-2.5">
                  {/* M-Pesa */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mpesa')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                      paymentMethod === 'mpesa'
                        ? 'border-[#063BAD] bg-[#F3F1E6] text-[#1D3C6E] font-bold ring-2 ring-[#689FF1]/30'
                        : 'border-[#9ABDE3]/60 hover:border-[#063BAD]/50 text-[#263864]'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-[#063BAD]" />
                    <span className="text-xs font-bold">M-Pesa Express</span>
                  </button>

                  {/* Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#063BAD] bg-[#F3F1E6] text-[#1D3C6E] font-bold ring-2 ring-[#689FF1]/30'
                        : 'border-[#9ABDE3]/60 hover:border-[#063BAD]/50 text-[#263864]'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#224EA6]" />
                    <span className="text-xs font-bold">Debit / Card</span>
                  </button>

                  {/* PayPal */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                      paymentMethod === 'paypal'
                        ? 'border-[#063BAD] bg-[#F3F1E6] text-[#1D3C6E] font-bold ring-2 ring-[#689FF1]/30'
                        : 'border-[#9ABDE3]/60 hover:border-[#063BAD]/50 text-[#263864]'
                    }`}
                  >
                    <Lock className="w-5 h-5 text-[#4365A1]" />
                    <span className="text-xs font-bold">PayPal</span>
                  </button>
                </div>

                {/* Conditional Fields based on method */}
                {paymentMethod === 'mpesa' && (
                  <div className="bg-[#F3F1E6] p-3.5 rounded-xl border border-[#9ABDE3]/70 space-y-2">
                    <label className="block text-xs font-bold text-[#1D3C6E]">
                      Safaricom M-Pesa Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0712 345 678 or +254 7..."
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full bg-white border border-[#9ABDE3] rounded-lg px-3 py-2 text-sm text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                    />
                    <p className="text-[11px] text-[#4365A1]">
                      An STK PIN prompt will immediately pop up on your phone. You can also pay manually via Till: <strong>{FOUNDATION_META.mpesaPaybill}</strong> ({FOUNDATION_META.mpesaAccount}).
                    </p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="bg-[#F3F1E6] p-3.5 rounded-xl border border-[#9ABDE3]/70 space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        placeholder="4242 ···· ···· 4242"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-white border border-[#9ABDE3] rounded-lg px-3 py-2 text-sm text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD] font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Expiry (MM/YY) *
                        </label>
                        <input
                          type="text"
                          placeholder="12/28"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full bg-white border border-[#9ABDE3] rounded-lg px-3 py-2 text-sm text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD] font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          CVV / CVC *
                        </label>
                        <input
                          type="password"
                          maxLength={4}
                          placeholder="···"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full bg-white border border-[#9ABDE3] rounded-lg px-3 py-2 text-sm text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD] font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Donor Contact Details */}
              <div className="space-y-3">
                <label className="block text-xs font-extrabold text-[#1D3C6E] uppercase tracking-wider">
                  Donor Information (For Official Receipt)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#4365A1] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full bg-white border border-[#9ABDE3] rounded-lg px-3 py-2 text-sm text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4365A1] mb-1">
                      Email Address (For Tax Receipt) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full bg-white border border-[#9ABDE3] rounded-lg px-3 py-2 text-sm text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                    />
                  </div>
                </div>
              </div>

              {/* Donor Dedication Option */}
              <div className="pt-2 border-t border-[#9ABDE3]/40 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#1D3C6E]">
                    <input
                      type="checkbox"
                      checked={isDedicated}
                      onChange={(e) => setIsDedicated(e.target.checked)}
                      className="w-4 h-4 accent-[#063BAD] rounded border-[#9ABDE3] focus:ring-[#063BAD]"
                    />
                    <Gift className="w-4 h-4 text-[#C02523]" />
                    <span>Dedicate this gift in honor or memory of someone special</span>
                  </label>
                </div>

                {isDedicated && (
                  <div className="bg-[#F3F1E6] p-4 rounded-xl border border-[#9ABDE3]/70 space-y-3 text-xs">
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1.5 font-semibold text-[#1D3C6E]">
                        <input
                          type="radio"
                          name="dedicationType"
                          checked={dedicationType === 'honor'}
                          onChange={() => setDedicationType('honor')}
                          className="accent-[#063BAD]"
                        />
                        <span>In Honor of</span>
                      </label>
                      <label className="flex items-center gap-1.5 font-semibold text-[#1D3C6E]">
                        <input
                          type="radio"
                          name="dedicationType"
                          checked={dedicationType === 'memory'}
                          onChange={() => setDedicationType('memory')}
                          className="accent-[#063BAD]"
                        />
                        <span>In Memory of</span>
                      </label>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Honoree's Full Name"
                        value={dedicationName}
                        onChange={(e) => setDedicationName(e.target.value)}
                        className="w-full bg-white border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        placeholder="Personal tribute or dedication note..."
                        value={dedicationMessage}
                        onChange={(e) => setDedicationMessage(e.target.value)}
                        className="w-full bg-white border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD] resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 px-6 rounded-md bg-[#C02523] hover:bg-[#9E1D1B] text-white font-bold text-base shadow-md transition-all focus:outline-hidden cursor-pointer"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Processing donation...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5 fill-white" />
                      <span>
                        Complete {frequency === 'monthly' ? 'Monthly' : ''} Gift of{' '}
                        {currency === 'USD' ? '$' : 'KES '}
                        {currentAmount.toLocaleString()}
                      </span>
                    </div>
                  )}
                </button>

                <div className="mt-2 text-center flex items-center justify-center gap-2 text-[11px] text-[#4365A1]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#063BAD]" />
                  <span>256-bit encrypted checkout · Instant official tax receipt</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
