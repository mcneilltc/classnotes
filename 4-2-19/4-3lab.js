/*## Exercise: This
​
Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:
​
1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
	4. logs the current photo name.
	4. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.
​
### Exercise Answer
​
```javascript
// Have fun :)
```
*/
const slideshow = {
    photoList: ['Photo1', 'Photo2', 'Photo3'],
    currentPhotoIndex: -1,
    nextPhoto: function (){
        if (this.currentPhotoIndex < this.photoList.length-1){
            this.currentPhotoIndex++;
            console.log (this.photoList[this.currentPhotoIndex]);
        }else { console.log('End of Slideshow'); this.pause();
    };
},  
prevPhoto: function(){
    if(this.currentPhotoIndex > -1){
        this.currentPhotoIndex--;
        console.log(this.photoList[this.currentPhotoIndex--]);     
    }else { console.log('Begin Slideshow');
};
},
getCurrentPhoto: function(){
    console.log(this.photoList[this.currentPhotoIndex]);
},
playInterval: null,
play: function(){this.playInterval= setInterval(this.nextPhoto.bind(this), 2000)},

pause: function(){ clearInterval (this.playInterval)}

}
/*slideshow.getCurrentPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();*/
slideshow.play();