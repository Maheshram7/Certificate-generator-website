function c(n)
{
	var x=document.getElementById(n).value;
	if(x.length<2 || x.length>500)
	{
		document.getElementById("s1").style.color="red";
		document.getElementById("s1").innerHTML="Too short or Too long in the "+document.getElementById(n).name;
		document.getElementById(n).value="";
	}
	else
	{
		document.getElementById("s1").style.color="green";
		document.getElementById("s1").innerHTML="Valid entry in "+document.getElementById(n).name;
	}
}

function clearr()
{
	document.getElementById("s1").innerHTML="";
	document.getElementById("f1").value="";
	document.getElementById("f2").value="";
	document.getElementById("f3").value="";
	document.getElementById("f4").value="";
	document.getElementById("f5").value="";
	document.getElementById("f6").value="";
	document.getElementById("f7").value="";
	document.getElementById("r1").checked=false  
    document.getElementById("r2").checked=false  
	document.getElementById("r3").checked=false 
	document.getElementById("r4").checked=false
	document.getElementById("certificate").style.backgroundImage="";
	document.getElementById("p3").innerHTML="";
    document.getElementById("p4").innerHTML="";
   	document.getElementById("p5").style.color="red";
   	document.getElementById("p5").innerHTML="No Preview Available";
   	document.getElementById("p6").style.color="red";
   	document.getElementById("p6").innerHTML="Design First And Preview The Certificate";
   	document.getElementById("date").innerHTML="";
   	document.getElementById("da").innerHTML="";
   	document.getElementById("auto").innerHTML="";
    document.getElementById("logoo").innerHTML="";
   	document.getElementById("sign").innerHTML="";
}

function preview()
{
	if(document.getElementById("f1").value=="")
	{
		document.getElementById("s1").style.color="red";
		document.getElementById("s1").innerHTML="Entry required in Field-1";
		//document.getElementById("s1").innerHTML=document.getElementById("f7").value;
	}
	else if(document.getElementById("f2").value=="")
	{
		document.getElementById("s1").style.color="red";
		document.getElementById("s1").innerHTML="Entry required in Field-2";
	}
	else if(document.getElementById("f3").value=="")
	{
		document.getElementById("s1").style.color="red";
		document.getElementById("s1").innerHTML="Entry required in Field-3";
	}
	else if(document.getElementById("f4").value=="")
	{
		document.getElementById("s1").style.color="red";
		document.getElementById("s1").innerHTML="Entry required in Field-4";
	}
	else if(document.getElementById("f5").value=="")
	{
		document.getElementById("s1").style.color="red";
		document.getElementById("s1").innerHTML="Entry required in Field-5";
	}
	else if(document.getElementById("f6").value=="")
	{
		document.getElementById("s1").style.color="red";
		document.getElementById("s1").innerHTML="Upload the logo file";
	}
	else if(document.getElementById("f7").value=="")
	{
		document.getElementById("s1").style.color="red";
		document.getElementById("s1").innerHTML="Upload the signature file";
	}
	else if(document.getElementById("r1").checked==false && 
		    document.getElementById("r2").checked==false && 
		    document.getElementById("r3").checked==false && 
		    document.getElementById("r4").checked==false) 
	{
		document.getElementById("s1").style.color="red";
		document.getElementById("s1").innerHTML="Choose a border layout";
	}
	else
	{
		document.getElementById("s1").style.color="#B600FF";
		document.getElementById("s1").innerHTML="Your certificate is Ready :)";
		if(document.getElementById("r1").checked==true)
    	{
      		var i=document.getElementById("r1").value;
    	}
    	else if(document.getElementById("r2").checked==true)
    	{
      		var i=document.getElementById("r2").value;
    	}
    	else if(document.getElementById("r3").checked==true)
    	{
    		var i=document.getElementById("r3").value;
    	}
    	else if(document.getElementById("r4").checked==true)
    	{
      		var i=document.getElementById("r4").value;
    	}
    	document.getElementById("certificate").style.backgroundImage="url(" + i +")";
    	document.getElementById("p3").innerHTML="Certificate Of "+document.getElementById("f1").value;
    	document.getElementById("p4").innerHTML="This certificate is awarded to";
    	document.getElementById("p5").style.color="black";
    	document.getElementById("p5").innerHTML=document.getElementById("f2").value;
    	document.getElementById("p6").style.color="black";
    	document.getElementById("p6").innerHTML=document.getElementById("f3").value;
    	document.getElementById("date").innerHTML=document.getElementById("f4").value;
    	document.getElementById("da").innerHTML="Date";
    	document.getElementById("auto").innerHTML=document.getElementById("f5").value;
    	var l=document.getElementById("f6").value;
    	var l1=l.slice(12);
    	document.getElementById("logoo").innerHTML="<img width='300px' src="+l1+">";
    	var k=document.getElementById("f7").value;
    	var k1=k.slice(12);
    	document.getElementById("sign").innerHTML="<img width='300px' src="+k1+">";
	}
}

function downloadd()
{
	if(document.getElementById("p3").innerHTML=="")
	{
		alert("First preview the certificate to download");
	}
	else
	{
		alert("Your certificate is downloaded");
	}
}