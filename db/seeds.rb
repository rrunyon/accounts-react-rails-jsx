# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
3.times do |i|
  record = { date: Date.today,
             title: "Title",
             amount: rand(0..100).to_i }
  Record.create(record)
end

3.times do |i|
  record = { date: Date.today,
             title: "Title",
             amount: rand(-100..0).to_i }
  Record.create(record)
end
