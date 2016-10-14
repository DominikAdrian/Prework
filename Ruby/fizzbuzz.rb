(1...100).each do |x|

	result = ""
  	result << "Fizz " if x % 3 == 0
  	result << "Buzz " if x % 5 == 0
  	result << "Bang " if x == 1
  	puts result.empty? ? x : result

end

		
		
