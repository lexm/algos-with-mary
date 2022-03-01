#!/usr/bin/env python3
from operator import truediv
from os import lseek

def ispalindrome(s):
    for i in range((len(s) // 2)):
        if s[i] != s[len(s) - i - 1]:
            return False
    return True

f = open("../input.txt", "r")
for s in f:
    s = s.strip()
    print(s + " " + str(ispalindrome(s)))