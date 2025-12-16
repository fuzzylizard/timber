class AddJobsReferenceApplicationState < ActiveRecord::Migration[8.1]
  def change
    add_reference :jobs, :application_state, foreign_key: true
  end
end
