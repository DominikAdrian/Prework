puts "Please write a full sentence:"

sentence = gets.chomp

array = sentence.split(/\W/)

p array.sort
