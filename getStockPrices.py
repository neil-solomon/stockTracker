import requests
import json
from pprint import PrettyPrinter
from time import sleep
import datetime


def dictPrint(dictionary, indent):
    # PrettyPrinter(indent=2).pprint(dictionary)
    for key in dictionary:
        if type(dictionary[key]) is dict:
            print(indent, key)
            indent += "  "
            dictPrint(dictionary[key], indent)
            indent = ' '*(len(indent)-2)
        else:
            print(indent, key, ":", dictionary[key])


def makeDowDict():
    """
    Reads a text file of the 30 stocks in the Dow Jones and build a
    dictionary of company name, stock symbol, and exchange.
    Argument:
    Return: dictionary 'dowDict'
    """
    with open('C:/Users/NeilS/stockTracker/dowStocks.txt', 'r') as file:
        lines = file.readlines()

    dowStocks = {}

    for line in lines:
        words = line.split()
        name = words[0]

        if (words[1][0] == '('):
            symbol = words[1]
        elif (words[2][0] == '('):
            symbol = words[2]
            name += words[1]
        elif (words[3][0] == '('):
            symbol = words[3]
            name += words[2]
        else:
            symbol = words[4]
            name += words[1] + words[2] + words[3]

        newName = ""
        if (name[len(name)-1] == '*'):
            for i in range((len(name)-1)):
                newName += name[i]
        else:
            newName = name

        exchange = ""
        newSymbol = ""
        i = 1
        while symbol[i] != ':':
            exchange += symbol[i]
            i += 1
        i += 1
        while symbol[i] != ')':
            newSymbol += symbol[i]
            i += 1

        dowStocks[newName] = {"symbol": newSymbol, "exchange": exchange}

    return dowStocks


def getPriceData(stockSymbol):
    apiKey = "CNZNC9E1VXS28LJ8"
    outputSize = "compact"  # dataSize=compact for 100 most recent prices
    function = "TIME_SERIES_DAILY"
    url = "https://www.alphavantage.co/query?function=" + function + "&symbol=" + \
        stockSymbol + "&outputsize=" + outputSize + "&apikey=" + apiKey

    response = requests.get(url).json()
    return response


def sleepAndPrint(time):
    for i in range(time, 0, -1):
        msg = "Waiting... " + str(i) + " "
        print(msg, end="\r")
        sleep(1)


def getDowPrices():
    dowStocks = makeDowDict()
    dowPrices = []
    for stock in dowStocks:
        firm = {}
        firm["name"] = stock
        data = getPriceData(dowStocks[stock]["symbol"])
        days = []
        prices = []
        try:
            for day in data["Time Series (Daily)"]:
                days.append(day)
                prices.append(data["Time Series (Daily)"][day]["4. close"])
            print(stock, "data retrieved.")
        except Exception as e:
            print(stock, "ERROR")
            print(e)
            print(data)
        firm["days"] = days
        firm["prices"] = prices
        dowPrices.append(firm)
        sleepAndPrint(20)
    return dowPrices


def updateDowPrices():
    dowPrices = getDowPrices()
    date = datetime.date.today()
    filename = "C:/Users/NeilS/stockTracker/stock_tracker/src/components/data/dowPrices_" + \
        str(date) + ".json"
    with open(filename, "w") as f:
        json.dump(dowPrices, f)


def main():
    filename = "C:/Users/NeilS/stockTracker/stock_tracker/src/components/data/dowPrices_2019-11-01.json"
    with open(filename, "r") as f:
        priceData = json.load(f)
    dowDict = makeDowDict()
    symbols = []
    for firm in dowDict:
        symbols.append(dowDict[firm]["symbol"])
    for i in range(len(priceData)):
        priceData[i]["symbol"] = symbols[i]
    print(priceData)
    with open(filename, "w") as f:
        json.dump(priceData, f)


if __name__ == "__main__":
    main()
