export interface User {
  id: number;
  email_address: string;
  password: string;
  password_confirmation?: string;
}

export interface Job {
  id: number;
  company_name: string;
  job_ad_url: string;
  job_title: string;
  company_url: string;
  notes: string;
  created_at: string;
  column_id: number;
}

export interface Column {
  id: number;
  name: string;
  icon: string;
  colour: string;
}
