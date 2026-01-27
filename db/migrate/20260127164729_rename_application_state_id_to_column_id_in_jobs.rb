# frozen_string_literal: true

# Renames application_state_id column to column_id in jobs table
class RenameApplicationStateIdToColumnIdInJobs < ActiveRecord::Migration[8.1]
  def change
    rename_column :jobs, :application_state_id, :column_id
  end
end
