# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(name: 'profe1', email: 'profe1@unab.cl', password: 'profe1')
User.create(name: 'profe2', email: 'profe2@unab.cl', password: 'profe2')
User.create(name: 'profe3', email: 'profe3@unab.cl', password: 'profe3')