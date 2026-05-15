class Score < ApplicationRecord
  validates :game, presence: true
  validates :name, presence: true
  validates :time, presence: true
end
