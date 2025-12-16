class CreateApplicationStates < ActiveRecord::Migration[8.1]
  def change
    create_table :application_states do |t|
      t.string :name

      t.timestamps
    end
  end
end
