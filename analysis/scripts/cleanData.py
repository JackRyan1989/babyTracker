# Data is saved as a single vector. We need to split that vector into many vectors.
import csv
from importData import grabData
from userFileInput import userInput

filename = userInput(True)   

vector = grabData(filename)

def separateVector(vector):
    sleepUserInd = vector[0].index('X')
    isAsleepInd = vector[0].index('XX')
    sleepTimeInd = vector[0].index('XXX')
    movementUserInd = vector[0].index('XXXX')
    sleepUserID = (vector[0][0 : sleepUserInd]) 
    isAsleep = (vector[0][sleepUserInd : isAsleepInd])
    del isAsleep[0]
    sleepTime = (vector[0][isAsleepInd : sleepTimeInd])
    del sleepTime[0]
    moveUserID = (vector[0][sleepTimeInd : movementUserInd])
    del moveUserID[0]
    moveTime = (vector[0][movementUserInd : ])
    del moveTime[0]
    
    with open("../output/cleanData.csv", "w", newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=',')
        writer.writerow(sleepUserID)
        writer.writerow(isAsleep)
        writer.writerow(sleepTime)
        writer.writerow(moveUserID)
        writer.writerow(moveTime)
    print('Data cleaned! File is in the /output folder.')


separateVector(vector)
