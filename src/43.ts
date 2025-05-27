import numpy as np
from scipy.special import erf

def custom_erf(x):
    """
    Calculate the custom error function (erf) of a given value.
    
    Parameters:
        x (float): The point at which to evaluate the erf function.
        
    Returns:
        float: The result of the erf function evaluated at x.
    """
    return 1.0 - erf(x / np.sqrt(2))

# Example usage
x = 3.5
result = custom_erf(x)
print(f"The value of erf({x}) is {result}")
