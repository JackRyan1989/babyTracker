import csv, pendulum, statistics, matplotlib.pyplot as plt
from collections import namedtuple
from importData import grabData
from userFileInput import userInput

filename = userInput(False)   

data = grabData(filename)
userID = data[0]
isAsleep = data[1]
sleepTime = data[2]

def cleanArrays():
    ids = []
    asleep = []
    for i in range(len(userID)):
        ids.append(userID[i])
        asleep.append(isAsleep[i])
        if (userID[i][0] == ' '):
                ids[i] = userID[i][1:]
                asleep[i] = isAsleep[i][1:]
    return [ids, asleep]

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
    x = cleanArrays()
    for i in range(len(x[0])):
        if (x[0][i] == ash and (x[1][i] == 'true' or x[1][i] == 'TRUE' )):
            sleepObj['ashSleep'] += 1
        elif (x[0][i] == ash and (x[1][i] == 'false' or x[1][i] == 'FALSE')):
            sleepObj['ashWake'] += 1
        elif (x[0][i] == jack and (x[1][i] == 'true' or x[1][i] == 'TRUE')):
            sleepObj['jackSleep'] +=1
        elif (x[0][i] == jack and (x[1][i] == 'false' or x[1][i] == 'FALSE')):
            sleepObj['jackWake'] += 1
        elif (x[0][i] == '' and (x[1][i] == 'true' or x[1][i] == 'TRUE')):
            sleepObj['nullSleep'] +=1
        elif (x[0][i] == '' and (x[1][i] == 'false' or x[1][i] == 'FALSE')):
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
    minute = ''
    second = ''
    year = '' 
    timeVector = []
    for i in range(len(theList)):
        spaceInd = theList[i].index(' ')
        theList[i] = theList[i][spaceInd + 1:]
        thInd = theList[i].index('th')
        day = int(theList[i][ : thInd])
        for k, v in monthDict.items():
            if k in theList[i]:
                month = int(v)
        year = int(theList[i][-4:])
        try:
            amInd = theList[i].index('am')
            hour = int(theList[i][amInd-9: amInd - 7])
            minute = int(theList[i][amInd-6: amInd - 4])
            second = int(theList[i][amInd-3: amInd])
        except:
            pmInd = theList[i].index('pm')
            hour = int(theList[i][pmInd-9: pmInd - 7]) + 12
            minute = int(theList[i][pmInd-6: pmInd - 4])
            second = int(theList[i][pmInd-3: pmInd])
        timeVector.append([year, month, day, hour, minute, second])
    return timeVector

def createLists():
    x = cleanArrays()
    # Initially we'll make a sleep time list and a wake time list. Then we can focus on cleaning up the times and creating an average.
    sleepList = []
    wakeList = []
    # Make the lists:
    for i in range(len(x[1])):
        if (sleepTime[i][0] == ' '):
            sleepTime[i] = sleepTime[i][1:]
        if (x[1][i] == 'true' or x[1][i] == 'TRUE'):
            sleepList.append(sleepTime[i])
        elif (x[1][i] == 'false' or x[1][i] == 'FALSE' ):
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
    difference = []
    for t in range(length):
        bedTime = pendulum.datetime(time.x[t][0], time.x[t][1], time.x[t][2], time.x[t][3], time.x[t][4], time.x[t][5])
        wakeTime = pendulum.datetime(time.y[t][0], time.y[t][1], time.y[t][2], time.y[t][3], time.y[t][4], time.y[t][5])
        period = wakeTime - bedTime
        duration = [(time.y[t][1], time.y[t][2]),(period.hours, period.minutes)]
        difference.append(duration)
    return difference

def medianSleepDuration():
    sleepLength = calcDurations()
    totalLength = []
    for i in range(len(sleepLength)):
        # I don't think this is actually correct
        totalLength.append((sleepLength[i][1][0] * 60) + (sleepLength[i][1][1]))
    medianLength = statistics.median(totalLength)
    print(f'Dezzy\'s median sleep duration is for {medianLength} hours.')
    return [medianLength, sleepLength[0:]]

def medianTimeOfSleep():
    time = createLists()
    bedTime = []
    for t in range(len(time.x)):
        bedTime.append([time.x[t][3]])
    medianHour = statistics.median(bedTime)
    print(f'Dezzy typically sleeps at {medianHour[0]}.')

def createEffortPlot():
    effort = calcEffort()
    labels = ['Ash Sleep', 'Ash Wake', 'Jack Sleep', 'Jack Wake','Unaccounted for Sleep', 'Unaccounted for wake']
    slices = [effort['ashSleep'], effort['ashWake'], effort['jackSleep'],effort['jackWake'], effort['nullSleep'], effort['nullWake']]
    colors = ['red', 'yellow', 'green', 'blue', 'purple', 'orange']
    plt.pie(slices, labels=labels, colors=colors, startangle=90,shadow=False, radius=1.2, autopct='%1.1f%%')
    plt.show()

def createDurationPlot():
    sleepDuration = medianSleepDuration()
    xAxis = []
    yAxis = []
    for i in range(len(sleepDuration[1])):
        date = f'{sleepDuration[1][i][0][0]}/{sleepDuration[1][i][0][1]}'
        duration = abs(sleepDuration[1][i][1][0]*60+sleepDuration[1][i][1][1])
        xAxis.append(date)
        yAxis.append(duration)
    plt.plot(xAxis, yAxis)
    plt.xlabel('Date')
    plt.ylabel('Sleep Length')
    plt.title('Dezzy\'s Sleep Duration')
    plt.show()


medianTimeOfSleep()
createDurationPlot()
createEffortPlot()