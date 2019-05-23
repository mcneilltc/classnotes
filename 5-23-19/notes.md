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
