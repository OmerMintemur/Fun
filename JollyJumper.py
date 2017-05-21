

mylist=[number for number in input().split()]

for x in range(0,len(mylist)):
    for y in range(x+1, len(mylist)):
        if str(abs(int(mylist[x]) - int(mylist[y]))) in mylist:
            break
        else:
            print("not")
            break



