# frozen_string_literal: true

# Associates application states with a user
class AssociateApplicationStateWithUser < ActiveRecord::Migration[8.1]
  def change
    add_reference :application_states, :user, index: true
  end
end
