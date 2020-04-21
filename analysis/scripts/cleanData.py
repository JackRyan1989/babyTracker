# Data is saved as a single vector. We need to split that vector into many vectors.
from importData import grabData

userInput = input('Please enter the filename you would like to import:')

if userInput == '':
    thisFile = open('savedFile.txt', 'r') 
    filename = thisFile.read()
else:
    filename = f"../rawData/{userInput}"
    savedFile = open('savedFile.txt', 'w')
    savedFile.write(filename)   

vector = grabData(filename)

def separateVector(vector):
    isAsleep = []
    sleepUserID = []
    for item in range(len(vector[0])):
        if (vector[0][item] == 'true' or vector[0][item] == 'false' ):
            isAsleep.append(vector[0][item])
    print(isAsleep)
    print(len(sleepUserID))


separateVector(vector)
