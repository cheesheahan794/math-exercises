import numpy as np
import matplotlib.pyplot as plt
plt.style.use('seaborn')

def draw_random_3d_surface():
    x = np.random.rand(10)
    y = np.random.rand(10)
    z = np.random.rand(10)

    fig = plt.figure(figsize=(8, 6))
    ax = fig.add_subplot(111, projection='3d')

    ax.plot_surface(x, y, z, cmap='viridis')
    ax.set_xlabel('X-axis')
    ax.set_ylabel('Y-axis')
    ax.set_zlabel('Z-axis')

    plt.show()

draw_random_3d_surface()
