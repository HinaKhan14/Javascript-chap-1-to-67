/*Functions, Switch statements, while... do-while loops*/
//task # 01
// function Power(base, power){
//     var result = base;
//     for(var i=1 ;i<power; i++){
//         result = result * base;
//     }
//  return result;
// }

// var a = 2;
// var b = 5;
// document.write("Power of "+a+" raised to "+b+ " " + Power(a,b));

//task # 02
// function isLeapYear(year){
//     if(year%4 == 0  && year%100 != 0 || year%400 == 0)
//     {
//         document.write("It is a leap year");
//     }
//     else{
//         document.write("It isn't a leap year");
//     }
// }
// var year = parseInt(prompt("Enter the year"));
// isLeapYear(year);

//task # 03
// function S(a,b,c){
//     var s;
//     return s = (a+b+c)/2;
// }
// function CalcArea(a,b,c){
//     var area;
//     area = S(a,b,c)*(S(a,b,c)-a)*(S(a,b,c)-b)*(S(a,b,c)-c);
// document.write("area of triangle is "+area);
// }

// var a=4, b=4, c=6;
// CalcArea(a,b,c);

//task # 04
// function mainFunction(){
//     var sub1 = parseInt(prompt("Enter total marks of subjcet 1"));
//     var sub2 = parseInt(prompt("Enter total marks of subjcet 2"));
//     var sub3 = parseInt(prompt("Enter total marks of subjcet 3"));
//     document.write("Average of 3 subjects: "+avg(sub1,sub2,sub3)+"<br/>");
//     document.write("Percentage: "+per(sub1,sub2,sub3) +"%");
// }
// function avg(s1,s2, s3){
//     var average = (s1+s2+s3)/3;
//     return average; 
// }
// function per(s1,s2,s3){
//     var per = (s1+s2+s3)/300 * 100;
//     return per;
// }
// mainFunction();

//task # 05
// function IndexOfALetter(word, alpha){
//     var i=0;
//     while(word[i]!=alpha){
//         i++;

//     }
//     document.write("Index of "+alpha+" is "+ i);
// }
// var word = prompt("Enter a sentence");
// var alpha = prompt("Enter an alphabet");
// IndexOfALetter(word, alpha);

//task # 06
// function deleteVowel(sentence){
//     for(var i=0; i<sentence.length; i++){
//         if(sentence[i] == 'a' || sentence[i] == 'e' || sentence[i] == 'i' || sentence[i] == 'o' || sentence[i] == 'u'){
//             sentence = sentence.replace(sentence[i], '');
//         }
//     }
//     document.write(sentence);
// }
// var sen = prompt("Enter a sentence");
// deleteVowel(sen);

//task # 07
// function occurrence(sentence){
//     var vowel, num=0;
//     for(var i=0; i<sentence.length; i++){
//        if(sentence[i]=='a' || sentence[i]=='e' || sentence[i]=='i' || sentence[i]=='o' || sentence[i]=='u'){
//            if(sentence[i+1]=='a' || sentence[i+1]=='e' || sentence[i+1]=='i' || sentence[i+1]=='o' || sentence[i+1]=='u'){
//                 num++;
//            }
//        }
//     }
//     document.write("Occurrence of two vowels in succession are: "+num);
// }
// occurrence("Please read this application and give me gratuity");

//task # 08
// function Meters(distance){
//     var result = distance*1000;
//     document.write("Distance in meter "+result+"<br/>");
// }
// function feet(distance){
//     var result = distance*3281;
//     document.write("Distance in feet "+result+"<br/>");
// }
// function inches(distance){
//     var result = distance*39370;
//     document.write("Distance in inches "+result+"<br/>");
// }
// function centimeter(distance){
//     var result = distance*10000;
//     document.write("Distance in meter "+result+"<br/>");
// }
// var cities = parseInt(prompt("Enter the distance between 2 cities in km"));
// Meters(cities);
// feet(cities);
// inches(cities);
// centimeter(cities);

//task # 10
// var RS = parseInt(prompt("Enter amount to withdraw"));
// var arr = [], i=0;
// do{
//     if(RS>=100){
//     RS = RS-100;
//     arr[i] = 100;
//     i++;
//     }
//     else if(RS>=50){
//     RS = RS-50;
//     arr[i] = 50;
//     i++;
//     }
//     else if(RS>=10){
//         RS = RS-10;
//     arr[i] = 10;
//     i++;
//     }
// }while(RS!=0)
// var hundred=0, fifty=0, ten=0;
// for(var j=0; j<arr.length; j++){
//     if(arr[j] == 100){
//         hundred++;
//     }
//     else if(arr[j] == 50){
//         fifty++;
//     }
//     else if(arr[j] == 10){
//         ten++;
//     }
// }
// document.write("You will have "+hundred+" hundred notes "+fifty+" fifty notes "+ten+" ten notes. ");

