# frozen_string_literal: true

# Renames ApplicationStates table to Columns
class RenameApplicationStatesToColumns < ActiveRecord::Migration[8.1]
  def change
    rename_table :application_states, :columns
  end
end
