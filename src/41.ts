import math

def calculate_area_rectangle(length, width):
    return length * width

def calculate_volume_cuboid(length, width, height):
    return length * width * height

def find_largest_prime_factor(number):
    if number <= 1:
        return None
    for i in range(2, int(math.sqrt(number)) + 1):
        while number % i == 0:
            largest_prime_factor = i
            break
    return largest_prime_factor

# Example usage
area_rectangle = calculate_area_rectangle(5, 4)
volume_cuboid = calculate_volume_cuboid(3, 2, 6)
largest_prime_factor = find_largest_prime_factor(100)

print("Rectangle area:", area_rectangle)
print("Cuboid volume:", volume_cuboid)
print("Largest prime factor of 100:", largest_prime_factor)
