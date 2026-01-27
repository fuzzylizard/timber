# frozen_string_literal: true

# Adds Order field to ApplicationStates table
class AddOrderToColumns < ActiveRecord::Migration[8.1]
  def change
    add_column :application_states, :order, :integer
  end
end
