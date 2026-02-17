# frozen_string_literal: true

# Represents a job ad application
class Job < ApplicationRecord
  belongs_to :user

  validates :company_name, presence: true
  validates :job_title, presence: true
end
