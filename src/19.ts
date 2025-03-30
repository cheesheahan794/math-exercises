def random_tsp_path():
    # This is a simple implementation of a Randomized TSP (Travelling Salesman Problem) solution.
    # In this implementation, we use a random permutation of the cities to simulate a random path.
    import random
    
    # Define an array with the cities in the same order as the input list
    city_list = [50, 30, 20, 10, 40, 60]
    
    # Generate a random permutation of the cities
    perm = random.sample(range(len(city_list)), len(city_list))
    
    # The route (distance) is based on the path generated by the random permutation
    route_distance = sum([abs(perm[i] - perm[(i + 1) % len(city_list)]) for i in range(len(city_list))])
    
    return route_distance

print(random_tsp_path())  # This will print a random distance between cities (example: random number)
