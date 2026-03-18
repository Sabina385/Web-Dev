class Product:
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.quantity=quantity
        
    def total_value(self):
        return self.price * self.quantity
        

    def apply_discount(self, percent):
     
        self.price *= (1 - percent / 100)
        
    def __str__(self):
        return f"{self.name} - ${self.price:.2f} (Quantity: {self.quantity})"
    

class Book(Product):
    
    def __init__(self,name,price,quantity,author,pages,genre,rating):
        super().__init__(name,price,quantity) 
        self.author=author
        self.pages=pages
        self.genre=genre
        self.rating=rating
        
    def apply_discount(self, percent):
        if self.rating <3:
            percent+=5
        return super().apply_discount(percent)   
    
    def info(self):
        return f"'{self.name}' by {self.author}, {self.pages} pages and genre: {self.genre} and rating: {self.rating}"     
        
    def recommend_same_genre(self, book_list):
       
        return [book.name for book in book_list if book.genre == self.genre and book.name != self.name]         
    
    
    
class Skin_Care_Cosmetics(Product):
    def __init__(self, name, price, quantity, brand, skin_type):
        super().__init__(name, price, quantity)
        self.brand = brand
        self.skin_type = skin_type 


    def apply_discount(self, percent):
        if self.brand.lower() == "bioderma":
            percent += 7
        return super().apply_discount(percent)

    def recommend_for_skin(self):
        recommendations = {
            "dry": "Use it daily to hydrate your skin.",
            "oily": "Use it sparingly to avoid excess oil.",
            "normal": "Suitable for daily use.",
            "combination": "Use on dry areas more frequently."
        }
        return recommendations.get(self.skin_type.lower())

    def brand_info(self):
        return f"{self.name} is from {self.brand} for skin type: {self.skin_type}."    
        