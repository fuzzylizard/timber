# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_01_14_182536) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "application_states", force: :cascade do |t|
    t.string "colour", default: "bg-purple-500"
    t.datetime "created_at", null: false
    t.string "icon", default: "Calendar"
    t.string "name"
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.bigint "application_state_id"
    t.string "company_name"
    t.string "company_url"
    t.datetime "created_at", null: false
    t.string "job_ad_url"
    t.string "job_title"
    t.text "notes"
    t.datetime "updated_at", null: false
    t.index ["application_state_id"], name: "index_jobs_on_application_state_id"
  end

  add_foreign_key "jobs", "application_states"
end
