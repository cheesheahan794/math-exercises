import sympy

def calculate_expression(x):
    result = sympy.simplify(sympy.lhs(x**2 - 3*x + 2) / (sympy.lhs(y - x)))
    return result
