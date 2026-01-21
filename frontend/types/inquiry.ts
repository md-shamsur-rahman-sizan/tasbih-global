export interface StudentInquiry {
  full_name: string;
  email: string;
  phone: string;
  desired_country: 'UK' | 'USA' | 'CAN' | 'AUS';
  message?: string;
}