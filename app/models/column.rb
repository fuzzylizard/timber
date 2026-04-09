# frozen_string_literal: true

# Represents the state of a user's application
class Column < ApplicationRecord
  DEFAULT_COLUMNS = [
    ['Applied', 1],
    ['HR Interview', 2],
    ['Tech Challenge', 3],
    ['Interviews', 4],
    ['Offer', 5],
    ['Rejected', 6]
  ].freeze

  belongs_to :user

  validates :name, presence: true

  def self.create_default_columns_for_user(user)
    DEFAULT_COLUMNS.map do |col|
      Column.create(name: col[0], order: col[1], user: user)
    end
  end
end
