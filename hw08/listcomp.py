def union(listA, listB):
    return listA + [x for x in listB if x not in listA]

print union([1,2,3],[2,3,4])

def intersection(listA,listB):
    return [x for x in listB if x in listA]

print intersection([1,2,3],[2,3,4])

def setDiff(listA,listB):
    return [x for x in listA if x not in listB]

print setDiff([2,3,4],[1,2,3])
print setDiff([1,2,3],[2,3,4])

def symDiff(listA,listB):
    return setDiff(union(listA,listB),intersection(listA,listB))

print symDiff([1,2,3],[2,3,4])

def cart(listA,listB):
    return[(x,y) for x in listA for y in listB]

print cart([1,2],['red','white'])
