# Import the .csv file, clean up any data that comes in and output an object of lists
import csv

def grabData(filename):
    data = []
    try:
        with open(filename) as csvDataFile:
            csvReader = csv.reader(csvDataFile)
            for row in csvReader:
                data.append(row)
    except FileNotFoundError:
        print('That file does not live here.')
    else:
        return data

