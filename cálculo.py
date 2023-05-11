import numpy as np
from scipy.optimize import fsolve

def vpl(i):
    return -20000 + 35000/(1+i) + 35000/(1+i)**2 
initial_guess = 0.1  # 10% taxa de juros inicial
i_solution = fsolve(vpl, initial_guess)
i_percentage = i_solution * 100

print(f"A taxa de juros 'i' que faz o VPL igual a zero é aproximadamente: {i_percentage[0]:.2f}%")
