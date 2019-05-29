** java oops**

object-- a piece of data(true, 4...)

class-- what type of data it is(integer, boolean...)

```java
Integer had a lot of values within its wrapper
Integer.somefunction within Java
Integer in = new Integer(4); the Integer is the class, 'in' is the object

int i = 4;

```

```java
public static void main(String[] args){
    int i=4;
    Integer in =new Integer(4);
    Hello hi = new Hello();
    hi.method();
}

static class Hello{
    int id;
    String name;
    boolean hi;

    public Hello(){
        this.id= id;
        this.name =name;
        this.hi= hi;
        
    }
}

```
**data types== classes

we can create our own classes-- name classes in Upper camel case
ex- MyFirstClass

constuctor-- will have the same name as the class itself--- can take in no or a lot of args
instances variables-- variables within the class but outside of the method
methods--- describes teh behavior of the class
```java
Animal dog2 = new Animal("rover");
Animal == class, dog2= obj name, new Animal()= constructor and 'rover' = parameters
```

Super class--the class whose charactersitics are inherited
sub class- the class that inherites methods from super class

use extends--- similar to extends in react.js
