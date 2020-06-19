function getOutput(){
	return document.getElementById("out").innerText;
}
function printOutput(num){
	document.getElementById("out").innerText=num;
		
	
}



var op = document.getElementsByClassName("oper");
for(var i=0;i<op.length;i++)
{
	op[i].addEventListener('click',function(){
		if(this.id=="clear")
		{
			printOutput("");
		}

		else
		{
			var output=getOutput();
			if(this.id=="equals")
			{

				var append1=getOutput();
				if(append1!="")
				{
				var result=eval(getOutput());
				printOutput(result);
				}
				else
				{
					printOutput("");
				}

			}
			else
			{
				output=output+this.id;
				printOutput(output);

			}


		}

	});	
}


var num1 = document.getElementsByClassName("num");
for(var i =0;i<num1.length;i++)
{
	num1[i].addEventListener('click',function(){
		var output=getOutput();
		if(output!=NaN)
		{
			output=output+this.id;
			printOutput(output);
		}
	});	
}


