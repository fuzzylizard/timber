export interface Job {
  id: number;
  company_name: string;
  job_ad_url: string;
  job_title: string;
  company_url: string;
  notes: string;
  created_at: string;
  application_state_id: number;
}

export interface Column {
  id: number;
  name: string;
  icon: string;
  colour: string;
}
