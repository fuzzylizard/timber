class CreateJobs < ActiveRecord::Migration[8.1]
  def change
    create_table :jobs do |t|
      t.string :company_name
      t.string :job_ad_url
      t.string :job_title
      t.string :company_url
      t.text :notes

      t.timestamps
    end
  end
end
