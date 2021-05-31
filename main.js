var images= ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIXjpRuoj6Yh0_TzmtdDKJ8dae1okK380WA&usqp=CAU","https://image.freepik.com/free-vector/happy-father-s-day_24908-59789.jpg","https://www.jing.fm/clipimg/detail/181-1812120_dolphins-clipart-mother-child-mothers-and-child-clipart.png","https://www.pikpng.com/pngl/m/525-5254148_character-man-beard-uncle-png-and-vector-image.png","https://cdn2.vectorstock.com/i/1000x1000/80/91/grandfather-wearing-eyeglasses-vector-21638091.jpg","https://i.pinimg.com/originals/db/f5/08/dbf508e27715f8ed3730bec349092789.jpg"];
var names= ["family book","me,Ayansh Dawra","father,Abhishek Dawra","mother,Smita Dawra","uncle,Abhinav Dawra","grand-father,Ashok Dawra","grand-mother,Usha Dawra"];
var i = 0;
function update()
{
  i++;
  var num_of_family_members = 6;
  if(i > num_of_family_members )
    {
      i = 0;
    }
  var updated_img = images[i];
  var updated_name = names[i];
  document.getElementById("my members img").src = updated_img;
  document.getElementById("my members name").innerHTML = updated_name;
}