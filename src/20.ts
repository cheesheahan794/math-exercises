def calculate_area(rectangle):
    """
    Calculate the area of a rectangle.
    
    Args:
        rectangle (dict): A dictionary containing the width and height of the rectangle.
        
    Returns:
        float: The area of the rectangle.
    """
    return rectangle["width"] * rectangle["height"]

# Example usage
rectangle = {"width": 5, "height": 3}
area = calculate_area(rectangle)
print(area)  # Output: 15
