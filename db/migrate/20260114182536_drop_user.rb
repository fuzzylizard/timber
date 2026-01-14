# frozen_string_literal: true

# Removes users table from the database.
class DropUser < ActiveRecord::Migration[8.1]
  def change
    drop_table :users
  end
end
