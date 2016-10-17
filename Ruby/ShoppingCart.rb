class ShoppingCart
def initialize
		@starting_price = 0
		@items = []
	end

def add_item(item)
    @items.push(item)
  	end

def nr_of_items
  		@items.length
  	end

def checkout
  		total_price = @starting_price
		@items.each do |item|
			if nr_of_items > 5
				total_price = item.price * 0.9 + total_price  		
    		else
  				total_price = total_price + item.price
			end
		end
	puts "Your total today is #{total_price} Have a nice day!"
	end
end

class Item
	attr_reader :name, :price
def initialize(name, price)
      @name = name
      @price = price
  end


def price
 price = @price
    end
end

class Houseware < Item
	attr_reader :price
	def price 
			if @price > 100
				return @price * 0.95
			else
				return @price
			end			
		end
	end

class Fruit < Item
	attr_reader :price
	def price
		if now.saturday? || now.sunday?
			return @price * 0.9
		else
			 return @price
		end
		end
	end


doms_cart = ShoppingCart.new
banana = Fruit.new("Banana", 10)
tv = Houseware.new("TV", 500)
beer = Item.new("Beer", 3)
rice = Item.new("Rice", 1)
anchovies = Item.new("Anchovies", 2)


doms_cart.add_item(beer)
doms_cart.add_item(rice)
doms_cart.add_item(tv)
doms_cart.add_item(beer)
doms_cart.add_item(anchovies)

doms_cart.checkout