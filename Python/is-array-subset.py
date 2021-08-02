# LOOPS

def isSubset(arr1, arr2, arr1L, arr2L):
    i = 0
    j = 0
    for i in range(arr1L):
        for j in range(arr2L):
            if(arr2[i] == arr1[j]):
                break
         
        # If the above inner loop was
        # not broken at all then arr2[i]
        # is not present in arr1[]
        if (j == arr2L):
            return 0
     
    # If we reach here then all
    # elements of arr2[] are present
    # in arr1[]
    return 1
 
# Driver code
if __name__ == "__main__":
     
    arr1 = [11, 1, 13, 21, 3, 7]
    arr2 = [11, 3, 7, 1]
 
    arr1L = len(arr1)
    arr2L = len(arr2)
 
    if(isSubset(arr1, arr2, arr1L, arr2L)):
        print("arr2[] is subset of arr1[] ")
    else:
        print("arr2[] is not a subset of arr1[]")

# using sorting & binary search

def isSubset(arr1, arr2, arr1L, arr2L):
    i = 0
    j = 0
    if arr1L < arr2L:
        return 0
 
    arr1.sort()
    arr2.sort()
 
    while i < arr2L and j < arr1L:
        if arr1[j] < arr2[i]:
            j += 1
        elif arr1[j] == arr2[i]:
            j += 1
            i += 1
        elif arr1[j] > arr2[i]:
            return 0
    return False if i < arr2L else True
 
 
# Driver code
arr1 = [11, 1, 13, 21, 3, 7]
arr2 = [11, 3, 7, 1]
 
arr1L = len(arr1)
arr2L = len(arr2)


# USING HASH TABLES

def isSubset(arr1, arr2, arr1L, arr2L):
  # using STL for hashing
  hashset = set()

  # hashset stores all the values of arr1
  for i in range(0, arr1L):
      hashset.add(arr1[i])

  # loop through and check if all elements in arr2 are in arr1
  for i in range(0, arr2L):
      if arr2[i] in hashset:
          continue
      else:
          return False
  return True

  # test code
arr1 = [11, 1, 13, 21, 3, 7]
arr2 = [11, 3, 7, 1]
 
arr1L = len(arr1)
arr2L = len(arr2)
