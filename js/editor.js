let count = 0;
let italicCount = 0;
let underLineCount = 0;
let countUpperLower = 0;
       const commentValue = document.getElementById('comment');


       /**************************************** */
       /* Text Bold */
       document.getElementById('btn-bold').addEventListener('click',function(){
           count = count + 1;
           if(count % 2 == 1){
               commentValue.style.fontWeight = 'bold';
               console.log(count);
           }
           else{
               commentValue.style.fontWeight = 'normal';
               console.log(count);
           }
       })
       /**************************************** */
       /* Text Italic */
       document.getElementById('btn-italic').addEventListener('click', function(){
           italicCount = italicCount + 1;
               
           if(italicCount % 2 == 1){
               commentValue.style.fontStyle = 'italic';
               console.log(italicCount);
           }
           else{
               commentValue.style.fontStyle = 'normal';
               console.log(italicCount);
           }
       })



       /**************************************** */
       /* Text Underline */

       document.getElementById('btn-underline').addEventListener('click', function(){
           underLineCount = underLineCount + 1;
           if(underLineCount % 2 == 1){
               commentValue.style.textDecoration = 'underline';
           }
           else{
               commentValue.style.textDecoration = 'none';
               
           }
       })

       /************************************************* */ 
       /*text align left  */

       document.getElementById('btn-left').addEventListener('click',function(){
           commentValue.style.textAlign = 'left';
       })

       /**************************************************** */
       /*text align center */

       document.getElementById('btn-center').addEventListener('click', function(){
           commentValue.style.textAlign = 'center';
       })

       /********************************************************* */
       /*text align right */
       document.getElementById('btn-right').addEventListener('click', function(){
           commentValue.style.textAlign = 'right';
       })

       /************************************ */
       /*Upercase and Lowercase */
       document.getElementById("uppercaseLowercase").addEventListener("click", function () {
               countUpperLower += 1;
            if (countUpperLower % 2 != 0) {

                   commentValue.style.textTransform = "uppercase";
                } else {

                  commentValue.style.textTransform = "lowercase";
   }
 });

   /* input color Change */
       document.getElementById('color-field').addEventListener('change', function(){
           const colorValue = document.getElementById('color-field').value;
           document.getElementById('comment').style.color = colorValue;
          })

       /* font size change */
       document.getElementById('number-field').addEventListener('change', function(){
           const numberValue = document.getElementById('number-field').value;

           commentValue.style.fontSize = numberValue + 'px';
           commentValue.style.height = '290px';
       })
   

       /********************************* */
       
