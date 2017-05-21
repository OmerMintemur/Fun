''' This program capitalize the given string.
For example, given string 
input: hello world
output: Hello World
created 21.05.2017 '''


def capitalize(string):

    wordlist=string.split(" ")
    retstring = ""

    for word in wordlist:
        if word:
            if word[0].isnumeric():
                retstring = retstring + word + " "
                pass
            else:
                w = word.title()
                retstring = retstring + w + " "
        else:
            retstring = retstring + " "
    return retstring





if __name__ == '__main__':
    string = input()
    capitalized_string = capitalize(string)
    print(capitalized_string)