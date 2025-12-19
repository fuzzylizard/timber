class AddColourIconToApplicationState < ActiveRecord::Migration[8.1]
  def change
    change_table :application_states do |t|
      t.string :colour, default: 'bg-purple-500'
      t.string :icon, default: 'Calendar'
    end
  end
end
