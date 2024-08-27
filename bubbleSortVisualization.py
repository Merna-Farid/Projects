import matplotlib.pyplot as plt
import numpy as np
import time

amount=15

lst=np.random.randint(0,100,amount)
x=np.arange(0,15,1)

start=time.time()
def bubbleSort(lst):
    n=len(lst)
    for i in range(n):
        for j in range(0,n-i-1):
            plt.bar(x,lst)
            plt.pause(0.0001)
            plt.clf()
            if  lst[j]>lst[j+1]:
                lst[j],lst[j+1]=lst[j+1],lst[j]

bubbleSort(lst)
end=time.time()
t=end-start
print(f"The time to sort the give array is: {t} seconds")

plt.show()






