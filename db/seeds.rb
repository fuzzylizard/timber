# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

ApplicationState.create(
  id: 1,
  name: "Applied"
)

Job.create(
  company_name: "TechCorp",
  job_ad_url: "https://techcorp.com/careers/12345",
  job_title: "Software Engineer",
  company_url: "https://techcorp.com",
  notes: "Exciting opportunity to work on cutting-edge technology.",
application_state_id: 1
)

Job.create(
  company_name: "Amazone",
  job_ad_url: "https://amazone.com/careers/12345",
  job_title: "Senior Software Engineer",
  company_url: "https://amazone.com",
  notes: "Still waiting to hear back from them.",
  application_state_id: 1
)

Job.create(
  company_name: "InnoSoft",
  job_ad_url: "https://innosoft.com/jobs/67890",
  job_title: "Full Stack Developer",
  company_url: "https://innosoft.com",
  notes: "Great company culture and benefits.",
  application_state_id: 1
)

Job.create(
  company_name: "DataWorks",
  job_ad_url: "https://dataworks.com/opportunities/54321",
  job_title: "Data Scientist",
  company_url: "https://dataworks.com",
  notes: "Looking forward to the interview process.",
  application_state_id: 1
)
