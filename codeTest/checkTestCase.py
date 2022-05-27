import os
import subprocess
import threading
import sys


def userCodeOutput(quesName):
    output = subprocess.getoutput("python3 ./{0}/{0}UserCode.py".format(quesName))
    return(output)

def testCaseInput(quesName):
    testcase = ""
    with open("./{0}/{0}TestCases".format(quesName), encoding = 'utf-8') as f:
        for line in f:
            testcase += line
    print(testcase)
#    os.system("cat ./{0}/{0}TestCases".format(quesName))

def checkTestCase(quesName):
    with open("./{0}/{0}CorrectOutput".format(quesName), encoding='utf-8') as crtOpt:
        out = crtOpt.read().split("\n")
    return(out[:-1])



quesName = ""
# with file I/O get question name - it's first line
# print(sys.argv[1])
quesName = "{}".format(sys.argv[1])

"""
threadUserCode = threading.Thread(target=userCodeOutput, args=(quesName,))
threadTestCaseInput = threading.Thread(target=testCaseInput, args=(quesName,))

threadUserCode.start()
threadTestCaseInput.start()

threadUserCode.join()
threadTestCaseInput.join()
"""

#output = subprocess.getoutput("python3 ./{0}/{0}UserCode.py {1}".format(quesName,file.strip()))
# userOutput = output.split("\n")
userOutput = userCodeOutput(quesName).split("\n")
#print("UserOutput: ", userOutput)

correctOutput = checkTestCase(quesName)
#print("CorrectOutput: ", correctOutput)

if userOutput == correctOutput:
    print("Accept")
else:
    print("Wrong Answer")
    
