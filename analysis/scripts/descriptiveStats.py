import csv, pendulum
from collections import namedtuple
from importData import grabData
from userFileInput import userInput

filename = userInput(False)   

data = grabData(filename)
userID = data[0]
isAsleep = data[1]
sleepTime = data[2]


def calcEffort():
    jack = '5e698b195dabe06755978529'
    ash = '5e6ad6ecea94fbd3435c5991'
    # we want to know who puts Dezzy to bed & who wakes up with him
    sleepObj = {
        'ashSleep': 0,
        'ashWake': 0,
        'jackSleep': 0,
        'jackWake': 0,
        'nullSleep': 0,
        'nullWake': 0
    }
    for person in range(len(userID)):
        if (userID[person][0] == ' '):
            userID[person] = userID[person][1:]
            isAsleep[person] = isAsleep[person][1:]
        if (userID[person] == ash and (isAsleep[person] == 'true' or isAsleep[person] == 'TRUE' )):
            sleepObj['ashSleep'] += 1
        elif (userID[person] == ash and (isAsleep[person] == 'false' or isAsleep[person] == 'FALSE')):
            sleepObj['ashWake'] += 1
        elif (userID[person] == jack and (isAsleep[person] == 'true' or isAsleep[person] == 'TRUE')):
            sleepObj['jackSleep'] +=1
        elif (userID[person] == jack and (isAsleep[person] == 'false' or isAsleep[person] == 'FALSE')):
            sleepObj['jackWake'] += 1
        elif (userID[person] == '' and (isAsleep[person] == 'true' or isAsleep[person] == 'TRUE')):
            sleepObj['nullSleep'] +=1
        elif (userID[person] == '' and (isAsleep[person] == 'false' or isAsleep[person] == 'FALSE')):
            sleepObj['nullWake'] +=1
    
    total = 0
    for v in sleepObj.values():
        total += v
    
    for k, v in sleepObj.items():
        sleepObj[k] = round((v/total)*100, 2)
    
    return sleepObj
                
def cleanTimeList(theList):
    # Clean up the lists. Abstract this into another function when done.
    monthDict = {
        'Jan': '1',
        'Feb': '2',
        'March': '3',
        'Apr': '4',
        'May': '5',
        'June': '6',
        'July': '7',
        'Aug': '8',
        'Sept': '9',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12',
    }
    month = ''
    day = ''
    hour = ''
    year = '' 
    timeVector = []
    for i in range(len(theList)):
        spaceInd = theList[i].index(' ')
        theList[i] = theList[i][spaceInd + 1:]
        thInd = theList[i].index('th')
        day = theList[i][ : thInd]
        for k, v in monthDict.items():
            if k in theList[i]:
                month = v
        year = theList[i][-4:]
        try:
            amInd = theList[i].index('am')
            hour = theList[i][amInd-9: amInd +2]
        except:
            pmInd = theList[i].index('pm')
            hour = theList[i][pmInd-9: pmInd +2]
        if hour[0] == ' ':
            hour = hour[1:]
        timeVector.append([year, month, day, hour])
    return timeVector

def createLists():
    # Initially we'll make a sleep time list and a wake time list. Then we can focus on cleaning up the times and creating an average.
    sleepList = []
    wakeList = []
    # Make the lists:
    for i in range(len(isAsleep)):
        if (sleepTime[i][0] == ' '):
            sleepTime[i] = sleepTime[i][1:]
        if (isAsleep[i] == 'true' or isAsleep[i] == 'TRUE'):
            sleepList.append(sleepTime[i])
        elif (isAsleep[i] == 'false' or isAsleep[i] == 'FALSE' ):
            wakeList.append(sleepTime[i])
    sleepVector = cleanTimeList(sleepList)
    wakeVector = cleanTimeList(wakeList)
    TimeVectors = namedtuple('TimeVectors', ['x', 'y'])
    t = TimeVectors(sleepVector, wakeVector)
    return t

def calcDurations():
    time = createLists()
    if len(time.x) > len(time.y):
        length = len(time.y)
    else:
        length = len(time.x)
    for t in range(length):
        print(time.x[t])
        # Figure out how to format last bit
        bedTime = pendulum.datetime(int(time.x[t][0]), int(time.x[t][1]), int(time.x[t][2]), time.x[t][3])
        print(bedTime)

effort = calcEffort()
calcDurations()