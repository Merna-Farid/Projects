from turtle import *
from random import random

tu=Turtle(shape="square")
tu.speed(10)
food=Turtle()
food.color("red")
food.penup()
x=random()*250
y=random()*250
food.setpos(x,y)

sc=Screen()
tu.color("white")
sc.bgcolor("black")
def movert():
    if tu.xcor()>250:
        return
    tu.setheading(0)
    tu.fd(30)
    
def movedw():
    if tu.ycor()<-240:
        return
    tu.setheading(270)
    tu.fd(30)
            
def movelt():
    if tu.xcor()<-250:
        return
    tu.setheading(180)
    tu.fd(30)
    

def moveup():
    if tu.ycor()>240:
        return
    tu.setheading(90)
    tu.fd(30)    

pen =Turtle()
pen.speed(6)
pen.shape("square")
pen.color("white")
pen.penup()
pen.hideturtle()
pen.goto(0, 250)
pen.write('0')

score=0

while score<2000:
    tu.settiltangle(0)
    tu.penup()
    sc.onkey(movert,"Right")
    sc.onkey(movedw,"Down")
    sc.onkey(movelt,"Left")
    sc.onkey(moveup,"Up")  
    sc.listen()
    if tu.distance(x,y)<20:
        score+=50
        pen.undo()
        pen.write(f"{score}", align="center")
        x=random()*250
        y=random()*250
        food.hideturtle()
        food.setpos(x,y)
        food.showturtle()
        if score>200:
            tu.speed(0)
        
done()
