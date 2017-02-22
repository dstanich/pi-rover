import sys
import os

# Add path to Robot.py script then import it
sys.path.insert(0, './Adafruit-Motor-HAT-Python-Library/examples')
import Robot

# Create instance of the Robot
robot = Robot.Robot(left_id=1, right_id=3)

# Issue call to API for direction and speed changes
def moveRobot(speed, direction):
	if direction == 'forward':
		robot.forward(speed)
	elif direction == 'left':
		robot.left(speed)
	elif direction == 'right':
		robot.right(speed)
	elif direction == 'backward':
		robot.backward(speed)
	elif direction == 'stop':
		robot.stop(speed)

# Main loop -- listen for commands
line=' '
while line:
	line = sys.stdin.readline()
	splitData = line.split()
	print 'SPEED: [' + splitData[0] + '] DIRECTION: [' + splitData[1] + ']'
	sys.stdout.flush()
	moveRobot()

print 'DONE'