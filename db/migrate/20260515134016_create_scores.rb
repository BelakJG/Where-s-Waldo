class CreateScores < ActiveRecord::Migration[8.1]
  def change
    create_table :scores do |t|
      t.string :game, null: false
      t.string :name, null: false
      t.integer :time, null: false

      t.timestamps
    end
  end
end
