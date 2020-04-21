def userInput(raw):
    userInput = input('Please enter the filename you would like to import:')

    while True:
        if raw and userInput != '':
            filename = f"../rawData/{userInput}"
            savedFile = open('rawDataHistory.txt', 'w')
            savedFile.write(filename)   
            return filename
        elif raw == False and userInput != '':
            filename = f"../output/{userInput}"
            savedFile = open('cleanDataHistory.txt', 'w')
            savedFile.write(filename)   
            return filename
        elif raw and userInput == '':
            thisFile = open('rawDataHistory.txt', 'r') 
            filename = thisFile.read()
            return filename
        elif raw == False and userInput == '':
            thisFile = open('cleanDataHistory.txt', 'r') 
            filename = thisFile.read()
            return filename
        else:
            print('Please enter the name of the file name.')