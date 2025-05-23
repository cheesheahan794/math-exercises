import sympy
from sympy import symbols, solve

x = symbols('x')
f = x**2 - 3*x + 1
g = x**3 - 4*x**2 + 5
h = f + g
simplified_h = h.simplify()
print(simplified_h)
