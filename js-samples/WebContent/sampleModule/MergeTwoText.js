var buttonMerge=document.getElementById("Merge");

function mergeTwoTexts(){
    var text1=document.getElementById("Text1");
    var text2=document.getElementById("Text2");

    var labelMerge=document.getElementById("MergeText");
    labelMerge.innerHTML=text1.value+" "+text2.value;
}

buttonMerge.addEventListener("click",mergeTwoTexts);