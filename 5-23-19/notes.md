**Java collections**

**ArrayList and HashMaps**

-	Arrays store data known as elements—they start at 0
Array—can’t change the size after it has been created, you have to create a new array with the new additions.
With arrayList- you can add and remove elements—need to use .size instead of .length with arrayList
.add()—add to the end of the array, or specify with a position number
.get()—get with the position number gets the element at that location
.remove()—
.size== .length for the length of the arraylist
.contains— check for specific items in the array
.clear—remove all elements from the list
Collections.reverse—reverse the contents of the array
```java
String to array
String myString = “some aaraay”
String str[] = myString.split(“”);-- holds a split version of the String

Arraylist->array-> string


fruitList = {“Apple”, “Banana”, “Grape”}

Convert list to an array
Object[] fruitArray = fruitList.toArray();

Create the string to hold the converted array to string
String fruitString= Array.toString(fruitArray); => [Apple, Bannana, Grape]—output of fruitString
To remove brackets and comma use string method .replace
Sout(Arrays.toString(fruitArray).replace(“[“, “”).replace(“]”, “”).replace(“,” “”)); => Apple Banana Grape
```

**HashMaps**- store data as key/value pairs
the key and the value are separated by an =

.put adds things to the HashMap
.get retrieves data
```java
HashMap<String, Intger> person = new HashMap<>();
person.put("Joan", 21);
person.put("Anna", 34);

=> {Joan =21, Anna=34}

person.get("Joan"); => 21

person.get.values() => [21, 34]// returns keys
person.get.keySet() //returns all the keys => [Joan, Anna]
person.get.toString()=> returns the items as a string
```
**HashTable**
Can use linked List

each function has its own hash function---the ones that are built into-Java.


**LinkedList**


linked list are indexeds so we don't now what position an object has in reference to the entire list

```java
LinkedList<String> animalList = new LinkedList<String>();
animalList.add("frog");
animalList.add("cat");
animalList.add("dog");
animalList.add("bird");

animalList.remove(2);// removes the item located at the 2nd index of the LinkedList
animalList.remove("cat");//removes the first instance of cat in the LinkedList
animalList.removeFirst();// remove the first element of the LinkedList
animalList.removeLast();// remove last element of the LinkedList
animalList.contains("bird");// returns true if bird is present in the LinkedList
animalList.size();// return Integer that states the size of the LinkedList
animalList.get(3);// return the value located at index 3
animalList.set(4, "emu");// set the value of the index 4 to emu
```
**Queues**
filo-- first in last out
first in- first out-- for queues
objects are added to the back and removed from the front
enqueing and dequeing
queues are equal to LinkedLists

```java
Queue<Integer> myQueue = new LinkedList<>();

```
**Stacks**

Last in, First out
 like with a stack of books- can't take anything from the middle of the stack has to always be at the top.
 ```java
 Stack<Integer> myStack;

 myStack = new Stack<Integer>();
 
 myStack.push();// added to the stack
 myStack.pop();// has to stay empty when using
 myStack.peek();//look at the top of the stack without removing anything
 myStack.empty();// to know if the stack is empty before we use it

 ```
 