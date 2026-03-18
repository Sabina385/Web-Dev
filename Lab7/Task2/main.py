from models import Product, Book , Skin_Care_Cosmetics

def main():
    b1 = Book("Epic Novel", 1000, 5, "Author A", 600, "Fiction", 2.5)
    b2 = Book("Short Story", 500, 3, "Author B", 150, "Mystery", 4.2)

    c1 = Skin_Care_Cosmetics("Hydrating Cream", 2000, 5, "LuxeBrand", "dry")
    c2 = Skin_Care_Cosmetics("Oil Control Gel", 1500, 8, "Bioderma", "oily")


    products = [b1, b2, c1, c2]


    for product in products:
        print(f"\n{product}")  # __str__
        print(f"Total value: {product.total_value()}")
        product.apply_discount(10)
        print(f"Price after discount (polymorphism!): {product.price}") 

    if isinstance(product, Book):
        print(product.info())
        print("Recommend same genre:", product.recommend_same_genre([b1, b2]))
    elif isinstance(product, Skin_Care_Cosmetics):
        print("Recommendation for skin:", product.recommend_for_skin())
        print(product.brand_info())
        

if __name__ == "__main__":
    main()        
