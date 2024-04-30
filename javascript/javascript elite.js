
	let devices= document.getElementsByClassName("devices");
	let compo=document.getElementsByClassName("selection");
	let outputs=document.querySelectorAll("p.Output");

 function enable(orgi,cls,val)
{
	let inputs=document.getElementsByClassName(cls);


	console.log(compo);


	if(inputs[0].hasAttribute("disabled"))
	{
		for(let i= 0;i<inputs.length;i++)
		{
			inputs[i].removeAttribute("disabled");
		}

		compo[cls-1].removeAttribute("disabled");
		inputs[0].setAttribute("checked","");

		outputs[cls-1].innerHTML=val;
		

	}
	else
	{

		for(let i= 0;i<inputs.length;i++)
		{
			inputs[i].setAttribute("disabled","");
		}
		compo[cls-1].setAttribute("disabled","");


		outputs[cls-1].innerHTML=0;

	}
}

function unit(val,cls)
{
	let inputs=document.getElementsByClassName(cls);
	
	
		
			outputs[cls-1].innerHTML=val;
		
	
	
}

function times(cls)
{
	
	let inputs=document.getElementsByClassName(cls);

	let values=compo[cls-1].options[compo[cls-1].selectedIndex].value;

	


		for (var i = 0; i < inputs.length; i++) 
		{
			if (inputs[i].checked) 
			{
			  var selectedValue = inputs[i].value;
			  outputs[cls-1].innerHTML=selectedValue*values;

			  break;
			}
		}	
	

}

function total()
{
	let total = document.querySelector("#total");
	let sum = 0; 

	for (let i = 0; i < outputs.length; i++)
	{
 		 sum = sum + parseInt(outputs[i].innerHTML);
	}

total.innerHTML = sum;

}

