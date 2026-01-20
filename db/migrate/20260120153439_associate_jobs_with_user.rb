# frozen_string_literal: true

# Associates jobs with users by adding a user reference to the jobs table.
class AssociateJobsWithUser < ActiveRecord::Migration[8.1]
  def change
    add_reference :jobs, :user, index: true
  end
end
