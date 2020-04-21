import csv
from importData import grabData
from userFileInput import userInput

filename = userInput(False)   

data = grabData(filename)

print(data)

