numbers = [16,7,8,9,4,55,]
largestNum = max(numbers)
print(largestNum)


even_num = []
odd_num = []

for num in numbers:
    if num % 2 == 0:
        even_num.append(num)
    else :
         odd_num.append(num)

print(numbers)
print(even_num)
print(odd_num)