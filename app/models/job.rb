# frozen_string_literal: true

# Represents a job ad application
class Job < ApplicationRecord
  belongs_to :user
end
