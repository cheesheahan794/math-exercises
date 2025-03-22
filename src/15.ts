def sum_of_two_numbers(a, b):
    return a + b

def calculate_expression(expression):
    try:
        result = eval(expression)
        print(result)
    except Exception as e:
        print(f"An error occurred: {e}")

expression = "3 + 5 * (2 - 1)"
calculate_expression(expression)
