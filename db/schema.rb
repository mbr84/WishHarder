# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160803225642) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "checkouts", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "reward_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "cost",       null: false
  end

  add_index "checkouts", ["reward_id"], name: "index_checkouts_on_reward_id", using: :btree
  add_index "checkouts", ["user_id"], name: "index_checkouts_on_user_id", using: :btree

  create_table "projects", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "content",     null: false
    t.integer  "author_id"
    t.integer  "category_id"
    t.boolean  "complete",    null: false
    t.integer  "duration",    null: false
    t.integer  "goal",        null: false
    t.integer  "pledged"
    t.boolean  "featured"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "blurb",       null: false
    t.string   "primary_img", null: false
    t.string   "city",        null: false
    t.string   "state",       null: false
  end

  add_index "projects", ["author_id"], name: "index_projects_on_author_id", using: :btree
  add_index "projects", ["category_id"], name: "index_projects_on_category_id", using: :btree

  create_table "rewardings", force: :cascade do |t|
    t.integer  "reward_id",          null: false
    t.integer  "backer_id",          null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "stripe_customer_id"
  end

  add_index "rewardings", ["backer_id"], name: "index_rewardings_on_backer_id", using: :btree
  add_index "rewardings", ["reward_id"], name: "index_rewardings_on_reward_id", using: :btree

  create_table "rewards", force: :cascade do |t|
    t.string   "name",        null: false
    t.integer  "cost",        null: false
    t.text     "description", null: false
    t.integer  "project_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "rewards", ["project_id"], name: "index_rewards_on_project_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "email",           null: false
    t.string   "fname",           null: false
    t.string   "lname",           null: false
  end

end
