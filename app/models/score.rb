class Score < ApplicationRecord
  validates :game, presence: true
  validates :name, presence: true
  validates :time, presence: true

  scope :from_game, ->(game) { where(game: game) if game.present? }
end
