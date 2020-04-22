import csv
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

def typicalSleepWakeTimes():
    # Initially we'll make a sleep time list and a wake time list. Then we can focus on cleaning up the times and creating an average.
    sleepList = []
    wakeList = []
    for i in range(len(isAsleep)):
        if (isAsleep[i][0] == ' '):
            isAsleep[i] = isAsleep[i][1:]
            sleepTime[i] = sleepTime[i][1:]
        
        if (isAsleep[i] == 'true' or isAsleep[i] == 'TRUE'):
            sleepList.append(sleepTime[i])
        elif (isAsleep[i] == 'false' or isAsleep[i] == 'FALSE' ):
            wakeList.append(sleepTime[i])
    
    print(sleepList)
    print(wakeList)

        

effort = calcEffort()
typicalSleepWakeTimes()