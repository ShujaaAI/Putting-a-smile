export type Currency = 'USD' | 'KES';

export type DonationFrequency = 'once' | 'monthly';

export type PaymentMethod = 'mpesa' | 'card' | 'paypal';

export interface DonationTier {
  id: string;
  usdAmount: number;
  kesAmount: number;
  label: string;
  impactDescription: string;
  badge?: string;
}

export interface DonationDetails {
  amount: number;
  currency: Currency;
  frequency: DonationFrequency;
  tierId?: string;
  paymentMethod: PaymentMethod;
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  isDedicated: boolean;
  dedicationType?: 'honor' | 'memory';
  dedicationName?: string;
  dedicationMessage?: string;
  receiptNumber?: string;
  timestamp?: string;
}

export type RegistrationRole = 'volunteer' | 'partner' | 'beneficiary';

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  role: RegistrationRole;
  interests: string[];
  location: string;
  availability: string;
  skillsOrNotes?: string;
}

export interface BeneficiaryFormData {
  fullName: string;
  phone: string;
  locationArea: string;
  assistanceType: 'food' | 'education' | 'widow_empowerment' | 'medical';
  householdSize: number;
  briefSituation: string;
}

export interface PartnerFormData {
  orgName: string;
  contactPerson: string;
  email: string;
  phone: string;
  partnershipType: 'corporate_csr' | 'grant' | 'in_kind_goods' | 'school_sponsorship';
  message: string;
}

export interface ProjectCause {
  id: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  detailedStory: string;
  targetAmountUSD: number;
  raisedAmountUSD: number;
  targetAmountKES: number;
  raisedAmountKES: number;
  beneficiariesCount: number;
  imageFallbackGradient: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  avatarSeed: string;
  verified: boolean;
}

export interface UpcomingEvent {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  location: string;
  time: string;
  description: string;
  capacity: number;
  rsvpCount: number;
}

export interface BlogPost {
  id: string;
  date: string;
  readTime: string;
  title: string;
  category: string;
  summary: string;
  author: string;
}
